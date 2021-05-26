import * as React from 'react';
import { useContext } from 'react';
import { ThemeCtx } from 'context/ThemeCtx';
import { ThemeModeSwitch, CircularLoader } from 'components/atoms';

import { StyledView, BackgroundSection, StyledTitle, HomeSection, InfoWrapper } from './styles';

const Home: React.FC = () => {
  const { themeMode } = useContext(ThemeCtx);

  return (
    <StyledView>
      <BackgroundSection></BackgroundSection>
      <HomeSection>
        <InfoWrapper>
          <StyledTitle themeMode={themeMode}>Titulo</StyledTitle>
        </InfoWrapper>
        <ThemeModeSwitch />
      </HomeSection>
    </StyledView>
  );
};

export default Home;
