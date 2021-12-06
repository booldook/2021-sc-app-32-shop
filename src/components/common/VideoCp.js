import styled from '../../style';
import React from 'react';
import { Link } from 'react-router-dom';

const Video = styled.video`
  width: ${(props) => props.width};
  max-width: ${(props) => (props.maxWidth ? '100%' : 'auto')};
`;

const VideoCp = ({
  link,
  src,
  alt = '',
  width = 'auto',
  maxWidth = false,
  className = '',
}) => {
  return (
    <div className={className}>
      {link ? (
        <Link to={link}>
          <Video src={src} alt={alt} loop muted autoPlay width={width} />
        </Link>
      ) : (
        <Video src={src} alt={alt} loop muted autoPlay width={width} />
      )}
    </div>
  );
};

export default VideoCp;
