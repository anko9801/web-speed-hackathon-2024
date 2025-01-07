import { useId } from 'react';
import styled from 'styled-components';

import { useConst } from '../../features/constant/hooks/useConst';
import { Color, Space, Typography } from '../styles/variables';

import { Spacer } from './Spacer';
import { Text } from './Text';

const _Content = styled.section`
  white-space: pre-line;
`;

export default function CompanyDialogContent() {
  const companyDialogA11yId = useId();
  const { data } = useConst({ params: { id: 'company' } });

  return (
    <_Content aria-labelledby={companyDialogA11yId} role="dialog">
      <Text as="h2" color={Color.MONO_100} id={companyDialogA11yId} typography={Typography.NORMAL16}>
        運営会社
      </Text>
      <Spacer height={Space * 1} />
      <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
        {data}
      </Text>
    </_Content>
  );
}
