import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    min-height: 100%;

    #root {
      display: contents;
    }
  }
`
