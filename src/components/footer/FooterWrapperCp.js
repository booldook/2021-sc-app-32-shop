import React from 'react';
import styled, { color, Container, media, font } from '../../style';
import ContactCp from './ContactCp';
import MenuWrapCp from './MenuWrapCp';
import EmailCp from './EmailCp';
import CopyrightCp from './CopyrightCp';

const Wrapper = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  font-family: ${font.en};
  padding: 4em 0;
`;

const Wrap = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  & > :nth-of-type(1) {
    width: 27.5%;
    @media ${media.lg} {
      width: 35%;
    }
    @media ${media.md} {
      width: 100%;
    }
  }
  & > :nth-of-type(2),
  & > :nth-of-type(3),
  & > :nth-of-type(4) {
    width: 15%;
    flex-grow: 1;
    @media ${media.md} {
      width: 100%;
    }
  }
  & > :nth-of-type(5) {
    width: 27.5%;
    @media ${media.lg} {
      width: 100%;
    }
  }
`;

const FooterWrapperCp = () => {
  return (
    <Wrapper>
      <Wrap>
        <ContactCp />
        <MenuWrapCp />
        <MenuWrapCp />
        <MenuWrapCp />
        <EmailCp />
      </Wrap>
      <Container>
        <CopyrightCp />
      </Container>
    </Wrapper>
  );
};

export default React.memo(FooterWrapperCp);
