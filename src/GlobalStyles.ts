import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font.family};
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.bgBody};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  ul, li {
    list-style: none;
  }
`
