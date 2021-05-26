import { DefaultTheme } from 'styled-components';

const Default: DefaultTheme = {
  name: 'Default',
  colors: {
    lShades: '#f8fafa',
    lAccent: '#f3be50',
    main: '#e94166',
    dAccent: '#2C7593',
    dShades: '#100f10',
    buttons: {
      colors: {
        primary: '#e94166',
        link: '#485fc7',
        info: '#3e8ed0',
        success: '#48c78e',
        warning: '#ffe08a',
        danger: '#f14668',
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

export default Default;
