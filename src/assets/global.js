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
    outline: none;
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
  max-width: 340px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media (min-width: 1024px) {
    max-width: 700px;
  }
`;

export const BoxArea = styled.div`
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  background-color: #FFF;
  padding: 12px;
  margin-bottom: 20px;
`;

export const InRight = styled.span`
  float: right;
`;

export const Input = styled.div`
  margin-bottom: 25px;
  max-width: 100%;
  width: 100%;
  display: block;

  ${({ small }) =>
    small &&
    `
    max-width: 140px;
    display: inline-block;
    margin: 0 0 25px 0;
    float: right;
  `}

  ${({ medium }) =>
    medium &&
    `
    float: left;
    max-width: 160px;
    display: inline-block;
    margin: 0 0 25px 0;
  `}

  &.invalid {
    input {
      border-color: #F30;
    }

    label {
      color: #F30;
    }
  }

  label {
    color: #CCC;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    display: block;
  }

  input {
    width: 100%;
    display: block;
    margin-top: 5px;
    color: #212121;
    padding-left: 13px;
    height: 45px;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

    &:focus {
      border-color: #A43287;
    }
  }
`;

export const Clear = styled.div`
  display: block;
  clear: both;
`;
