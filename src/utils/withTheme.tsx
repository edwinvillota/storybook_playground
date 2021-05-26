import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Default } from 'styles/themes';

function withTheme(component: React.ReactNode): React.ReactElement {
  return <ThemeProvider theme={Default}>{component}</ThemeProvider>;
}

export default withTheme;
