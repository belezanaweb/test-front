import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-black: #212122;
    --color-gray: #CCCCCC;
    --color-gray-dark: #999;
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
    background-color: var(--color-background);
    color: var(--color-black);
    min-height: 100vh;
  }
`;
