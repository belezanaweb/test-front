import { css } from 'styled-components';

const base = css`
  html {
    background: ${(props) => props.theme.global.primary.backgroundColor};
    font-size: 62.5%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`;

export default base;
