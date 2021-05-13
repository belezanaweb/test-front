import { createGlobalStyle } from 'styled-components'

import px2vw from '../utils/px2vw'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    
  }
  div {
      display: flex;
      justify-content: center;
  }
  :root {
      background-color: #EEE;

      font-size: ${px2vw(30)};

      @media (min-width: 768px) {
        font-size: ${px2vw(24)};
      }

      @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1440px) {
        font-size: 20px;
      }
    }
`

export default Global
