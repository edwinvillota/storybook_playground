import * as React from 'react';
import { DefaultTheme } from 'styled-components';

interface IThemeCtx {
  theme: DefaultTheme;
  switchTheme: ({ theme }: { theme: DefaultTheme }) => void;
  themeMode: 'Dark' | 'Light';
  switchThemeMode: ({ mode }: { mode: 'Dark' | 'Light' }) => void;
  isLoading: boolean;
}

const ThemeCtx = React.createContext({} as IThemeCtx);

export default ThemeCtx;
