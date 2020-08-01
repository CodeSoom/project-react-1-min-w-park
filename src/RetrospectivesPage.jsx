import React from 'react';

import styled from '@emotion/styled';

import RetrospectivesContainer from './RetrospectivesContainer';

const SubHeader = styled.div({
  margin: '0em 5em',
  fontSize: '2.1em',
});

export default function RetrospectivesPage() {
  return (
    <>
      <SubHeader>무엇을 하셨나요?</SubHeader>
      <RetrospectivesContainer />
    </>
  );
}
