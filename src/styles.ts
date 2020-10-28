import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font}
  }

  html {
    font-size: 62.5%;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyle
