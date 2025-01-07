/* eslint-disable import/order */
import sharp from 'npm:sharp';
import { extname, parse } from 'https://deno.land/std@0.201.0/path/mod.ts';
import $ from 'https://deno.land/x/dax@0.28.0/mod.ts';

const img2avif = async (input: string, output: string, resize?: number) =>
  await sharp(input)
    .resize(resize)
    .avif({ quality: 18 })
    .toFile(output)
    .then(() => console.log(`Compressed ${input} to ${output}`));

const jxl2png = async (input: string) => {
  const output = input.replace('.jxl', '.png');
  await $`djxl ${input} ${output}`.then(() => console.log(`Converted ${input} to ${output}`));
};

{
  const base = '../server/seeds/images';
  const lists: string[] = await $`cd ${base} && ls`.lines();

  await Promise.all([
    // .jpeg -> .avif
    ...lists
      .filter((filename) => filename.endsWith('.jpg'))
      .flatMap((filename) => [
        img2avif(`${base}/${filename}`, `${base}/${filename.replace('.jpg', '.avif')}`),
        img2avif(`${base}/${filename}`, `${base}/${filename.replace('.jpg', '_32x32.avif')}`, 32),
        img2avif(`${base}/${filename}`, `${base}/${filename.replace('.jpg', '_96x96.avif')}`, 96),
        img2avif(`${base}/${filename}`, `${base}/${filename.replace('.jpg', '_128x128.avif')}`, 128),
      ]),
    // .png -> .avif
    ...lists
      .filter((filename) => filename.endsWith('.png'))
      .flatMap((filename) => [
        img2avif(`${base}/${filename}`, `${base}/${filename.replace('.png', '.avif')}`),
        img2avif(`${base}/${filename}`, `${base}/${filename.replace('.png', '_64x91.avif')}`, 64),
        img2avif(`${base}/${filename}`, `${base}/${filename.replace('.png', '_96x136.avif')}`, 96),
        img2avif(`${base}/${filename}`, `${base}/${filename.replace('.png', '_192x272.avif')}`, 192),
      ]),
    // .jxl -> .png -> .avif
    ...lists
      .filter((filename) => filename.endsWith('.jxl'))
      .flatMap((filename) =>
        (async () => {
          await jxl2png(`${base}/${filename}`);
          await img2avif(`${base}/${filename.replace('.jxl', '.png')}`, `${base}/${filename.replace('.jxl', '.avif')}`);
          await $`rm ${base}/${filename.replace('.jxl', '.png')}`;
        })(),
      ),
  ]);
}

{
  const file = '../client/assets/heroImage.png';
  await img2avif(file, file.replace('.png', '.avif'));
}
