import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      lShades: string;
      lAccent: string;
      main: string;
      dAccent: string;
      dShades: string;
      dark: {
        dark1: string;
        dark2: string;
        dark3: string;
      };
      light: {
        light1: string;
        light2: string;
        light3: string;
      };
      background: {
        bg1: string;
        bg2: string;
        bg3: string;
      };
      buttons: {
        colors: {
          primary: string;
          link: string;
          info: string;
          success: string;
          warning: string;
          danger: string;
        };
        sizes: {
          small: string;
          normal: string;
          medium: string;
          large: string;
        };
      };
    };
    lengths: {
      sm1: string;
      sm2: string;
      sm3: string;
      md1: string;
      md2: string;
      md3: string;
      lg1: string;
      lg2: string;
      lg3: string;
    };
  }
}
