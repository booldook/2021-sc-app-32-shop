import React, { useEffect, useState } from 'react';
import styled from '../../style';

import { prdApi } from '../../modules/api';

const Wrapper = styled.ul``;

const PrdWrapperCp = () => {
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    (async () => setPrd(await prdApi()))();
  }, []);
  return <Wrapper></Wrapper>;
};

export default React.memo(PrdWrapperCp);
