import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Arial', sans-serif;
  }
`

export default GlobalStyle
