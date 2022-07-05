import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue';
    src: local('Helvetica Neue'), url(../../assets/fonts/HelveticaNeue.ttf) format('truetype'),
      url(../../assets/fonts/HelveticaNeue.woff) format('woff'),
      url(../../assets/fonts/HelveticaNeue.eot?#iefix) format('embedded-opentype');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
}
`

export default GlobalStyle
