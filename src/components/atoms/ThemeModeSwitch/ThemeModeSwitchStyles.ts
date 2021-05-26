import styled from 'styled-components';

interface CommonProps {
  themeMode: 'Dark' | 'Light';
}

export const Container = styled.label<CommonProps>`
  display: flex;
  align-items: center;
  width: 52px;
  height: 30px;
  background: ${({ themeMode }) =>
    themeMode === 'Light'
      ? 'linear-gradient(132.18deg, #ecf0f1 -7.04%, #100f10 67.53%)'
      : 'linear-gradient(130.1deg, #fff3b3 14.82%, #f8e18f 54.11%, #cda000 96.81%)'};
  border-radius: 50px;
  padding: 0 4.5px;
  cursor: pointer;
  z-index: 1;
`;

export const IconWrapper = styled.div<CommonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background: ${({ themeMode }) =>
    themeMode === 'Dark'
      ? 'linear-gradient(132.18deg, #ecf0f1 -7.04%, #100f10 67.53%)'
      : 'linear-gradient(130.1deg, #fff3b3 14.82%, #f8e18f 54.11%, #cda000 96.81%)'};
  transform: ${({ themeMode }) =>
    themeMode === 'Dark' ? 'translateX(22px) rotate(360deg)' : 'translateX(0) rotate(0deg)'};
`;

export const StyledInput = styled.input`
  display: none;
`;
