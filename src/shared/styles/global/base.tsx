import { css } from 'styled-components';

const base = css`
  html {
    background: ${(props) => props.theme.global.primary.backgroundColor};
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default base;
