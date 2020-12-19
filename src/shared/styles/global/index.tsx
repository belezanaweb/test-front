import { createGlobalStyle } from 'styled-components';

import reset from './reset';
import base from './base';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${base}
`;
