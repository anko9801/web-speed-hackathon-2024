import { useSetAtom } from 'jotai';
import React, { Suspense } from 'react';
import styled from 'styled-components';

import { DialogContentAtom } from '../atoms/DialogContentAtom';
import { Color, Space } from '../styles/variables';

import { Box } from './Box';
import { Button } from './Button';
import CompanyDialogContent from './CompanyDialogContent';
import ContactDialogContent from './ContactDialogContent';
import { Flex } from './Flex';
import OverviewDialogContent from './OverviewDialogContent';
import QuestionDialogContent from './QuestionDialogContent';
import TermDialogContent from './TermDialogContent';

const _Button = styled(Button)`
  color: ${Color.MONO_A};
`;

export const Footer: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const updateDialogContent = useSetAtom(DialogContentAtom);

  const handleRequestToTermDialogOpen = () => {
    updateDialogContent(
      <Suspense fallback={null}>
        <TermDialogContent />
      </Suspense>,
    );
  };

  const handleRequestToContactDialogOpen = () => {
    updateDialogContent(
      <Suspense fallback={null}>
        <ContactDialogContent />
      </Suspense>,
    );
  };

  const handleRequestToQuestionDialogOpen = () => {
    updateDialogContent(
      <Suspense fallback={null}>
        <QuestionDialogContent />
      </Suspense>,
    );
  };

  const handleRequestToCompanyDialogOpen = () => {
    updateDialogContent(
      <Suspense fallback={null}>
        <CompanyDialogContent />
      </Suspense>,
    );
  };

  const handleRequestToOverviewDialogOpen = () => {
    updateDialogContent(
      <Suspense fallback={null}>
        <OverviewDialogContent />
      </Suspense>,
    );
  };

  return (
    <Box as="footer" backgroundColor={Color.Background} p={Space * 1}>
      <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
        <img alt="Cyber TOON" src="/assets/cyber-toon.svg" />
        <Flex align="start" direction="row" gap={Space * 1.5} justify="center">
          <_Button disabled={!isClient} onClick={handleRequestToTermDialogOpen}>
            利用規約
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToContactDialogOpen}>
            お問い合わせ
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToQuestionDialogOpen}>
            Q&A
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToCompanyDialogOpen}>
            運営会社
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToOverviewDialogOpen}>
            Cyber TOONとは
          </_Button>
        </Flex>
      </Flex>
    </Box>
  );
};
