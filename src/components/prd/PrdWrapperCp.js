import React, { useEffect, useState, useCallback } from 'react';
import styled, { media, font, color } from '../../style';

import { prdApi } from '../../modules/api';
import PrdCp from './PrdCp';
import ButtonCp from '../common/ButtonCp';

const PrdWrapper = styled.ul`
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 101%;
  @media ${media.md} {
    width: 101.5%;
  }
  @media ${media.sm} {
    width: 102%;
  }
  @media ${media.xs} {
    width: 102.5%;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 500;
  font-family: ${font.en};
  margin: 2em 0 1em 0;
  text-align: center;
`;

const Button = styled(ButtonCp)`
  display: block;
  width: 200px;
  margin: auto;
  padding: 1em 0;
`;

const PrdWrapperCp = () => {
  const [prd, setPrd] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      setPrd(await prdApi({ page: 1 }));
    })();
  }, []);

  const onClick = useCallback(async () => {
    setPage(page + 1);
    setPrd([...prd, ...(await prdApi({ page }))]);
  }, [page, prd]);

  return (
    <div>
      <Title>New Products</Title>
      <PrdWrapper>
        {prd.map((v, i) => (
          <PrdCp {...v} key={i} />
        ))}
      </PrdWrapper>
      <Button
        txt="SHOW MORE"
        colorHover={color.light}
        bgHover={color.dark}
        bold="bold"
        onClick={onClick}
      />
    </div>
  );
};

export default React.memo(PrdWrapperCp);
