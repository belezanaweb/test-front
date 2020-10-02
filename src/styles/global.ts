import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-gray: #CCCCCC;
    --color-orange: #FF6C00;
    --color-orange-dark: #D45A00;
    --color-background: #EEEEEE;
    --font-primary: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-primary);
    outline: none;
  }

  body {
    color: var(--color-black);
    min-height: 100vh;
  }
`;
