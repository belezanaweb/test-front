import { createGlobalStyle } from 'styled-components';
import Helveticawoff from "./assets/fonts/Helvetica.woff";
import Helveticawoff2 from "./assets/fonts/Helvetica.woff2";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;    
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  body html #root {
    height: 100%;
  }
  @font-face {
    font-family: 'Helvetica';
    src: local('Helvetica'), local('Helvetica'),
    url(${Helveticawoff}) format('woff');
    url(${Helveticawoff2}) format('woff2'),
    font-weight: 300;
    font-style: normal;
  }
}`;