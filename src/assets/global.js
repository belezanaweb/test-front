import { injectGlobal } from  'styled-components';

/**
 * Fonts
 */
import Helvetica from './fonts/helvetica.ttf';

injectGlobal`
  @font-face {
    font-family: 'Helvetica';
    src: url(${ Helvetica });
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Helvetica', sans-serif;
  }
`;
