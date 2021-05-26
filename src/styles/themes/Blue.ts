import { DefaultTheme } from 'styled-components';

const Blue: DefaultTheme = {
  name: 'Blue',
  colors: {
    lShades: '#f1f1f0',
    lAccent: '#add1d4',
    main: '#597288',
    dAccent: '#344d54',
    dShades: '#1c2c37',
    buttons: {
      colors: {
        primary: '#597288',
        link: '#999999',
        info: '#0b1115',
        success: '#509d61',
        warning: '#cd8d29',
        danger: '#f44336',
      },
      sizes: {
        small: '12px',
        normal: '16px',
        medium: '20px',
        large: '24px',
      },
    },
    dark: {
      dark1: '#100f10',
      dark2: '#1b1b1b',
      dark3: '#242424',
    },
    light: {
      light1: '#fdfefe',
      light2: '#f2f5f5',
      light3: '#ecf0f1',
    },
    background: {
      bg1: '#fdfefe',
      bg2: '#f2f5f5',
      bg3: '#ecf0f1',
    },
  },
  lengths: {
    sm1: '0.25rem',
    sm2: '0.5rem',
    sm3: '0.75rem',
    md1: '1rem',
    md2: '1.25rem',
    md3: '1.5rem',
    lg1: '2rem',
    lg2: '3rem',
    lg3: '4rem',
  },
};

export default Blue;
