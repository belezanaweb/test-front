import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  input {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
  }

  body {
    font-size: ${theme.size[2]};
    color: ${theme.colors.grayDark};
    background-color: ${theme.colors.grayLight};
    -webkit-font-smoothing: antialiased;

    ${theme.media.desktop} {
      font-size: ${theme.size[4]};
    }
  }
`
