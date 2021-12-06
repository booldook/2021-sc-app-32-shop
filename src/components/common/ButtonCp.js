import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../style';

const Button = styled.div`
  display: inline-block;
`;

const ButtonCp = ({
  txt = 'button',
  txtHover,
  bg = 'transparent',
  bgHover,
  border = '#000',
  borderHover,
  width = 'auto',
  link,
}) => {
  txtHover = txtHover || txt;
  bgHover = bgHover || bg;
  borderHover = borderHover || border;
  return (
    <Button bg bgHover border width>
      {link ? <Link to={link}>{txt}</Link> : txt}
    </Button>
  );
};

export default React.memo(ButtonCp);
