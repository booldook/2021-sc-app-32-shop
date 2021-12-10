import React, { useEffect, useState } from 'react';
import styled, { font, color, css } from '../../style';
import FadeLoader from 'react-spinners/FadeLoader';

import { prdApi } from '../../modules/api';
// import PrdCp from './PrdCp';
// import ButtonCp from '../common/ButtonCp';

const loaderCss = css`
  display: block;
  margin: 0 auto;
  height: 80px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 500;
  font-family: ${font.en};
  margin: 2em 0 1em 0;
  text-align: center;
`;

const withPrdWrapper = (OriginCompenent) => {
  const Component = (props) => {
    const [prd, setPrd] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      (async () => {
        setPrd(await prdApi({ page: 1 }));
      })();
    }, []);

    const combineProps = { ...props, prd, setPrd, isLoading, setIsLoading };
    return (
      <div>
        <Title>{props.title}</Title>
        <OriginCompenent {...combineProps} />
        <FadeLoader
          color={color.primary}
          loading={isLoading}
          css={loaderCss}
          size={60}
        />
      </div>
    );
  };
  return Component;
};

export default withPrdWrapper;
