import React from 'react';
import styled, { color } from '../../style';

const ColorWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1em 0;
`;

const Color = styled.li`
  width: 1.25em;
  height: 1.25em;
  border-radius: 50%;
  margin: 0 0.25em 0.5em 0;
  background-color: ${(props) => props.color};
`;

const ColorCp = ({ colors }) => {
  return (
    <ColorWrap>
      {colors.map((v, i) => (
        <Color color={v.code} key={i} />
      ))}
    </ColorWrap>
  );
};

export default React.memo(ColorCp);
