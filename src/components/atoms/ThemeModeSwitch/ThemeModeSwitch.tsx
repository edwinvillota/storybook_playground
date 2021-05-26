import * as React from 'react';
import { InputHTMLAttributes, useContext } from 'react';
import { ThemeCtx } from 'context/ThemeCtx';
import { Container, IconWrapper, StyledInput } from './ThemeModeSwitchStyles';
import { MdWbSunny, MdBrightness3 } from 'react-icons/md';

type ThemeModeSwitchProps = InputHTMLAttributes<HTMLInputElement>;

const ThemeModeSwitch: React.FC<ThemeModeSwitchProps> = (props) => {
  const { themeMode, switchThemeMode } = useContext(ThemeCtx);

  return (
    <Container themeMode={themeMode} htmlFor="ThemeModeSwitch">
      <IconWrapper themeMode={themeMode}>
        {themeMode === 'Light' ? (
          <MdWbSunny color="black" size=".8rem" />
        ) : (
          <MdBrightness3 color="white" size=".8rem" />
        )}
      </IconWrapper>
      <StyledInput
        type="checkbox"
        data-testid="ThemeModeSwitch"
        {...props}
        id="ThemeModeSwitch"
        checked={themeMode === 'Dark'}
        onChange={(e) => {
          switchThemeMode(e.target.checked ? { mode: 'Dark' } : { mode: 'Light' });
        }}
      />
    </Container>
  );
};

export default ThemeModeSwitch;
