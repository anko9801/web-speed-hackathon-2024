import { useId } from 'react';
import styled from 'styled-components';

import { useConst } from '../../features/constant/hooks/useConst';
import { Color, Space, Typography } from '../styles/variables';

import { Spacer } from './Spacer';
import { Text } from './Text';

const _Content = styled.section`
  white-space: pre-line;
`;

export default function TermDialogContent() {
  const termDialogA11yId = useId();
  const { data } = useConst({ params: { id: 'term' } });
  console.log(data);

  return (
    <_Content aria-labelledby={termDialogA11yId} role="dialog">
      <Text as="h2" color={Color.MONO_100} id={termDialogA11yId} typography={Typography.NORMAL16}>
        利用規約
      </Text>
      <Spacer height={Space * 1} />
      <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
        {data}
      </Text>
    </_Content>
  );
}
