import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-black: #000000;
    --font-family-primary: Helvetica, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family-primary);
    outline: none;
  }

  body {
    color: var(--color-black);
    min-height: 100vh;
  }
`;
