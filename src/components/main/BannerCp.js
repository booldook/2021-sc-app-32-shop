import React, { useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '../../style';

const Wrapper = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 3em;
`;

const BannerCp = () => {
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BANNER_URL)
      .then(({ data }) => {
        console.log(data.list);
      })
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <img src="/img/banner-slider-1.jpg" className="w100" alt="Main Banner" />
        </div>
        <div>
          <img src="/img/banner-slider-1.jpg" className="w100" alt="Main Banner" />
        </div>
      </Slider>
    </Wrapper>
  );
};

export default React.memo(BannerCp);
