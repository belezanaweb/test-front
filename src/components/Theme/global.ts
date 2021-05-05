import { createGlobalStyle } from "styled-components";
import { colors } from "../../styles/index";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: ${colors.white}
  }
  body,
  input,
  button {
    font: 1.6rem 'Roboto', sans-serif;
    font-size: 16px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
