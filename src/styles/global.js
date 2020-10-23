import { createGlobalStyle } from 'styled-components';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a:hover {
    text-decoration: none;
  }

  h4 {
    color: #999;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-transform: uppercase;
    margin-left: 10px;
  }

  label {
    color: #CCC;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
  }

  .App {
    background-color: #EEE;
    min-height: 100vh;
    padding: 10px;
    padding-top: 55px;
  }

  .btn {
    height: 60px;
    border-radius: 3px;
    background-color: #FF6C00;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
    color: #FFF;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 44px;
    text-align: center;

    &:hover, &:focus {
      background-color: #D45A00;
      color: #FFF;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
