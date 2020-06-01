import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const colors = {
  primaryLight: '#FF7800',
  primary: '#FF6C00',
  primaryDark: '#D45A00',
  secondary: '#A43287',
  grayExtraLight: '#EEE',
  grayLight: '#E0E7EE',
  gray: '#CCC',
  grayDark: '#999',
  grayExtraDark: '#212122',
  danger: '#F30',
}

const theme = {
  backgroundColor: colors.grayExtraLight,
  fontFamily: '"Helvetica Neue", sans-serif',
  colors,
};

type Theme = typeof theme;

const CustomGlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${props => props.theme.backgroundColor};
    font-family: ${props => props.theme.fontFamily};
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    transition:
      color 0.5s,
      background-color 0.5s,
      border-color 0.5s;
  }
`;

export const Theming: React.FC<{ theme: Theme }> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <CustomGlobalStyle />
      {children}
    </ThemeProvider>
  );
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
