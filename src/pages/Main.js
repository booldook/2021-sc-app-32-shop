import React from 'react';
import styled, { Container, css } from '../style';

import HeaderCp from '../components/header/HeaderCp';
import BannerWrapperCp from '../components/main/BannerWrapperCp';
import NoticeWrapperCp from '../components/main/NoticeWrapperCp';
import ParallaxCp from '../components/main/ParallaxCp';
import CenterParallaxCp from '../components/main/CenterParallaxCp';
import PrdWrapperCp from '../components/prd/PrdWrapperCp';
import SurfWrapperCp from '../components/prd/SurfWrapperCp';

const Wrapper = styled(Container)`
  margin: auto;
  height: 10000px;
`;

const Main = () => {
  return (
    <Wrapper>
      <HeaderCp />
      <BannerWrapperCp />
      <NoticeWrapperCp />
      <ParallaxCp id="242" />
      <PrdWrapperCp />
      <CenterParallaxCp id="243" />
      <SurfWrapperCp />
    </Wrapper>
  );
};

export default React.memo(Main);
