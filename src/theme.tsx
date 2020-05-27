import 'styled-components';

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

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
