import { css } from 'styled-components'
import { device } from './breakpoints'

export const theme = css`
  :root {
    --colors-gray-200: #ccc;
    --colors-gray-300: #999;
    --colors-gray-700: #212122;

    --colors-orange-200: #ff7800;
    --colors-orange-300: #ff6c00;
    --colors-orange-400: #d45a00;

    --colors-black: #170c2e;
    --colors-white: #fff;
    --colors-background: #eee;

    --font-size-lg: 20px;
    --font-size-md: 14px;
    --font-size-sm: 13px;
    --font-size-xs: 12px;

    --line-height-md: 16px;

    --border-radius-md: 3px;

    --spacing-px: 0.1rem;
    --spacing-0: 0;
    --spacing-1: 0.5rem;
    --spacing-1: 0.5rem;
    --spacing-2: 1rem;
    --spacing-3: 1.5rem;
    --spacing-4: 2rem;
    --spacing-5: 2.5rem;
    --spacing-6: 3rem;
    --spacing-7: 3.5rem;
    --spacing-8: 4rem;
    --spacing-9: 4.5rem;
    --spacing-10: 5rem;
    --spacing-11: 5.5rem;

    @media ${device.tablet} {
      --font-size-md: 15px;
      --font-size-sm: 14px;
    }
  }
`
