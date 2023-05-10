import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font.family};
    color: ${(props) => props.theme.colors.black};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
