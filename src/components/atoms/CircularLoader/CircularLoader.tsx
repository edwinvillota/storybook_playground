import React from 'react';
import { StyledComponent } from 'styled-components';
import { StyledSvg, StyledPath } from './CircularLoaderStyles';

interface CircularLoaderProps extends StyledComponent<'svg'> {
  size: number;
  color: string;
}

const CircularLoader: React.FC<CircularLoaderProps> = ({ size, color, ...props }) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <StyledPath fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></StyledPath>
    </StyledSvg>
  );
};

export default CircularLoader;
