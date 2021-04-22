import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body{
    background: ${theme.mainBackgroundColor};
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    min-height: 100%;

    @media (min-width: 1000px){
        min-height: 100vh;
    }
}

`
