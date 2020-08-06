import { css } from "@emotion/core";

export default function({ typography, colors, breakpoints })  {
  return css`
  *,  
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: ${typography.base};
    font-family: ${typography.body};
    line-height: 17px;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    
    @media (min-width: ${breakpoints.small}px) {
      font-size: ${typography.baseDesktop};
      line-height: 1.35;
    }

  }
  
  body {
    background-color: #EEE;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit; 
    cursor: pointer;
  }
  
`
};