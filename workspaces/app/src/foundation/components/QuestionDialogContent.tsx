import { useId } from 'react';
import styled from 'styled-components';

import { useConst } from '../../features/constant/hooks/useConst';
import { Color, Space, Typography } from '../styles/variables';

import { Spacer } from './Spacer';
import { Text } from './Text';

const _Content = styled.section`
  white-space: pre-line;
`;

export default function QuestionDialogContent() {
  const questionDialogA11yId = useId();
  const { data } = useConst({ params: { id: 'question' } });

  return (
    <_Content aria-labelledby={questionDialogA11yId} role="dialog">
      <Text as="h2" color={Color.MONO_100} id={questionDialogA11yId} typography={Typography.NORMAL16}>
        Q&A
      </Text>
      <Spacer height={Space * 1} />
      <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
        {data}
      </Text>
    </_Content>
  );
}
