import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'Helvetica Neue';
    src: local('Helvetica Neue'), local('helveticaneueregular'),
      url('/static/fonts/helvetica-neue/helveticaneueregular.woff2') format('woff2'),
      url('/static/fonts/helvetica-neue/helveticaneueregular.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Helvetica Neue';
    src: local('Helvetica Neue'), local('helveticaneuebold'),
      url('/static/fonts/helvetica-neue/helveticaneuebold.woff2') format('woff2'),
      url('/static/fonts/helvetica-neue/helveticaneuebold.woff') format('woff');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
`;

export default fonts;
