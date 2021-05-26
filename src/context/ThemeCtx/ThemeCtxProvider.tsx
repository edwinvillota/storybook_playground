import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { ThemeCtx } from 'context/ThemeCtx';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Default, Blue } from 'styles/themes';
import { GlobalStyle } from 'styles/Global';

const ThemeCtxProvider: React.FC = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<DefaultTheme>(Blue);
  const [themeMode, setThemeMode] = useState<'Dark' | 'Light'>('Light');

  const switchTheme = ({ theme }: { theme: DefaultTheme }) => {
    setLoading(true);
    const themeWithMode: DefaultTheme = {
      ...theme,
      colors: {
        ...theme.colors,
        background: {
          bg1: theme.colors.light.light1,
          bg2: theme.colors.light.light2,
          bg3: theme.colors.light.light3,
        },
      },
    };

    setTheme(themeWithMode);
    setLoading(false);
  };
  const switchThemeMode = ({ mode }: { mode: 'Dark' | 'Light' }) => setThemeMode(mode);

  useEffect(() => {
    setLoading(true);
    if (themeMode === 'Light') {
      const themeWithMode: DefaultTheme = {
        ...theme,
        colors: {
          ...theme.colors,
          background: {
            bg1: theme.colors.light.light1,
            bg2: theme.colors.light.light2,
            bg3: theme.colors.light.light3,
          },
        },
      };

      setTheme(themeWithMode);
    }

    if (themeMode === 'Dark') {
      const themeWithMode: DefaultTheme = {
        ...theme,
        colors: {
          ...theme.colors,
          background: {
            bg1: theme.colors.dark.dark1,
            bg2: theme.colors.dark.dark2,
            bg3: theme.colors.dark.dark3,
          },
        },
      };

      setTheme(themeWithMode);
    }
    setLoading(false);
  }, [themeMode]);

  return (
    <ThemeCtx.Provider value={{ switchTheme, theme, themeMode, switchThemeMode, isLoading }}>
      {children}
    </ThemeCtx.Provider>
  );
};

export const Theme: React.FC = ({ children }) => {
  const { theme, isLoading } = useContext(ThemeCtx);

  if (!isLoading && theme) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    );
  } else {
    return <span>Loading ...</span>;
  }
};

export default ThemeCtxProvider;
