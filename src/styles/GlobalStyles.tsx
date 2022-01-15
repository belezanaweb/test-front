import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 100%;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    color: ${({ theme }) => theme.color.text.primary};
    background-color: ${({ theme }) => theme.color.background.primary};
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`

export default GlobalStyles
