import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  deviceSize: {
    desktopMax: '1920px',
    tabletMax: '1264px',
    tabletMin: '1025px',
    mobileMax: '1024px',
  },
  colors: {
    orange300: '#FF7800',
    orange400: '#FF6C00',
    orange800: '#D45A00',
    gray100: '#E0E7EE',
    gray200: '#EEE',
    gray300: '#E7E7E7',
    gray400: '#CCC',
    gray800: '#999',
    white200: '#FFF',
    black400: '#212122',
    black500: '#212121',
    black800: '#000',
    violet400: '#A43287',
    red400: '#F30',
  },
  shadows: {
    default: '1px 1px 5px 0 rgba(0, 0, 29, 0.22)',
    button: '0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 -3px 0 0 #D45A00 inset',
    input: '0 1px 2px 0 rgba(0, 0, 0, 0.2) inset',
  }
}

export const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;
