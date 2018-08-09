import styled, { injectGlobal } from  'styled-components';

/**
 * Fonts
 */
import Helvetica from './fonts/helvetica.ttf';
import HelveticaBold from './fonts/helvetica-bold.ttf';

injectGlobal`
  @font-face {
    font-family: 'Helvetica';
    src: url(${ Helvetica });
  }
  
  @font-face {
    font-family: 'Helvetica';
    src: url(${ HelveticaBold });
    font-weight: bold;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Helvetica', sans-serif;
  }

  body {
    background-color: #EEE;
    padding-bottom: 60px;
  }
`;

export const SectionTitle = styled.h3`
  color: #999;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 12px;
`;

export const Inner = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`
export const InRight = styled.span`
  float: right;
`
