import { createMiddleware } from 'hono/factory';

export const cacheControlMiddleware = createMiddleware(async (c, next) => {
  await next();
  if (c.req.path.includes('/assets') || c.req.path.includes('/images')) {
    c.res.headers.append('Cache-Control', 'public, max-age=604800, immutable');
    return;
  }
  c.res.headers.append('Cache-Control', 'private');
  c.res.headers.append('Cache-Control', 'no-store');
});
