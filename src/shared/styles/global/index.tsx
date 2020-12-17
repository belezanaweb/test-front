import { createGlobalStyle } from 'styled-components';

import reset from './reset';
import fonts from './fonts';
import base from './base';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  ${base}
`;
