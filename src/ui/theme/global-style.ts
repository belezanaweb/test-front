import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font};
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    padding-bottom: 8rem;
  }

  img {
    max-width: 100%;
    display: block;
  }

  li {
    list-style: none;
  }
`

export default GlobalStyle
