import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(270deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 187/4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
`;

export const StyledSvg = styled.svg`
  animation: ${rotate} 1.4s linear infinite;
`;

export const StyledPath = styled.circle`
  stroke-dasharray: 200;
  stroke-dashoffset: 0;
  transform-origin: center;
  stroke: currentColor;
  animation: ${dash} 1.4s ease-in-out infinite;
`;
