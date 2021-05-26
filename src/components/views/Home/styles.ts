import styled from 'styled-components';

export const StyledView = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const BackgroundSection = styled.section`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 0;
`;

export const HomeSection = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  border-radius: 0 0 518px 0;
  background-color: ${({ theme }) => theme.colors.background.bg1};
  z-index: 1;
  pointer-events: none;
`;

export const StyledTitle = styled.h1<{ themeMode: 'Dark' | 'Light' }>`
  display: flex;
  font-size: 40px;
  z-index: 5;
  color: ${({ theme, themeMode }) => (themeMode === 'Light' ? theme.colors.dark.dark1 : theme.colors.light.light1)}};
`;
