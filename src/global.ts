import { DefaultTheme, createGlobalStyle, css } from 'styled-components'

export const GlobalStyle =
  createGlobalStyle <
  DefaultTheme >
  `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    height: 100%;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background: ${theme.colors.lightGray};
    }
  `}
`
