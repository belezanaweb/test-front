import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
  }
  
  h2, h3 {
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 20px;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.typography.body.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
