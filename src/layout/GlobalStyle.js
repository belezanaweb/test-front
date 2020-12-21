import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    ${variables}
  }

  html,body{
    background: #EEE;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    height: 100%;
    overflow: auto;
  }

  h1, h2{
  color: #999;
  font-size: var(--font);
  font-weight: 700;
  line-height: 17px;
  margin: 5px;
  text-transform: uppercase;
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
