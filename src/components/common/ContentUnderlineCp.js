import React from 'react';
import { Link } from 'react-router-dom';
import styled, { color, Underline } from '../../style';

const Wrapper = styled(Underline)`
  display: inline-block;
  line-height: 1.75em;
`;

const ContentCp = ({ txt, link }) => {
  return <Wrapper>{link ? <Link to={link}>{txt}</Link> : { txt }}</Wrapper>;
};

export default React.memo(ContentCp);
