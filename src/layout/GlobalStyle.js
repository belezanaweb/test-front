import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    ${variables}
  }

  html,body,#root{
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    height: 100%;
    overflow: auto;
  }

  #root{
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: var(--font);
    justify-content: center;
  }
`

export default GlobalStyle
