import React from 'react';
import styled from '@emotion/styled';

import TestNavi from '../components/TestNavi';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Main = () => {
  return (
    <Wrapper>
      <TestNavi />
      <h1>My Info</h1>
    </Wrapper>
  );
};

export default Main;
