import React from 'react';
import styled, { color } from '../../style';
import LogoCp from '../common/LogoCp';

const Wrapper = styled.div``;

const ContactCp = () => {
  return (
    <Wrapper>
      <LogoCp type="W" />
    </Wrapper>
  );
};

export default React.memo(ContactCp);
