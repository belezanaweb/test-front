import themeVariables from 'styles/theme';

type ThemeInterface = typeof themeVariables

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
