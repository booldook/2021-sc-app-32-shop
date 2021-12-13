import React from 'react';
import styled, { color, Container } from '../../style';

const Wrapper = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
`;

const FooterWrapperCp = () => {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
};

export default React.memo(FooterWrapperCp);
