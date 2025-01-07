import { useId } from 'react';
import styled from 'styled-components';

import { useConst } from '../../features/constant/hooks/useConst';
import { Spacer } from '../components/Spacer';
import { Text } from '../components/Text';
import { Color, Space, Typography } from '../styles/variables';

const _Content = styled.section`
  white-space: pre-line;
`;

export default function ContactDialogContent() {
  const contactDialogA11yId = useId();
  const { data } = useConst({ params: { id: 'contact' } });

  return (
    <_Content aria-labelledby={contactDialogA11yId} role="dialog">
      <Text as="h2" color={Color.MONO_100} id={contactDialogA11yId} typography={Typography.NORMAL16}>
        お問い合わせ
      </Text>
      <Spacer height={Space * 1} />
      <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
        {data}
      </Text>
    </_Content>
  );
}
