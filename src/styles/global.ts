import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
  theme?: DefaultTheme | undefined
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Helvetica Neue Light'), local('Helvetica Neue Light'),
      url('/fonts/HelveticaNeueCyr-Light.woff2') format('woff2'), /* Super Modern Browsers */
  }

  @font-face {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Helvetica Neue Roman'), local('Helvetica Neue Roman'),
        url('/fonts/HelveticaNeueCyr-Roman.woff2') format('woff2'), /* Super Modern Browsers */
  }

  @font-face {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Helvetica Neue Bold'), local('Helvetica Neue Bold'),
        url('/fonts/HelveticaNeueCyr-Bold.woff2') format('woff2'), /* Super Modern Browsers */
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.xsmall};
      background-color: ${theme.colors.lighterGray};
    }
  `}

  #root {
    max-width: 1020px;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`
export default GlobalStyles
