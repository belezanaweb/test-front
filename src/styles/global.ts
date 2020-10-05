import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-black: #212122;
    --color-gray: #CCCCCC;
    --color-gray-dark: #999;
    --color-orange: #FF6C00;
    --color-orange-dark: #D45A00;
    --color-error: #F30000;
    --color-background: #EEEEEE;
    --font-primary: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --mobile-min-height-container: 341px;
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

export const GlobalContainer = styled.div`
  margin: 0 auto;
  width: var(--mobile-min-height-container);

  @media screen and (max-width: 340px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: self-start;
    grid-gap: 40px;
    padding: 40px;
  }
`;
