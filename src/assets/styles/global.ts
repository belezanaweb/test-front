import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
body {
  font-family: 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#root {
  width: 100%;
  height: 100%;
  main {
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    @media (min-width: 1024px) {
      display: flex;
      max-width: 1120px;
      justify-content: space-between;
    }
  }
}
`

export default GlobalStyle