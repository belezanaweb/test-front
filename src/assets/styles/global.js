import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --orange: #FF6C00;
    --orange-hover: #D45A00;
    --purple: #A43287;
    --red: #F30;
    --text: #212121;
    --grey-text: #CCC;
    --grey-border: #E7E7E7; 
    --grey-placeholder: #E0E7EE;
    --background: #EEE;
    --white: #FFF;
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

  input, button, p, strong, h1, h2, h3, h4, h5, h6 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: var(--text);
  }
`
