import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/img/ella-surf-logo-b.png';

const LogoCp = ({ type }) => {
  return (
    <Link to="/">
      <img src={LogoImg} alt="" />
    </Link>
  );
};

export default LogoCp;
