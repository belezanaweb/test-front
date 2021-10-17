import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #EEE;
    --white: #FFF;

    --orange: #FF6C00;
    --orange-100: #D45A00;
    --orange-150: #FF7800;
      
    --grey: #CCC;
    --grey-100: #D8D8D8;
    --grey-150: #E0E7EE;
    --grey-200: #999;
    --gray-dark: #212121;

    --purple: #6a1b60;
    --red: #F30;   
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    width: 100%;
    height: 100vh;
  }

  #root {
    width: 100%;
  }
