import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    transition: all .5s;
  }

  body {
    background-color: ${(props) => props.theme.colors.background?.bg1};
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }
`;
