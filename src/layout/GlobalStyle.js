import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    ${variables}
  }

  html,body{
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    height: 100%;
    overflow: auto;
  }

  #root{
    display: flex;
    flex-direction: column;
    font-size: var(--font);
    height: auto;
    justify-content: center;
  }
`

export default GlobalStyle
