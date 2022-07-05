import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
      accent: string;
      disabled: string;
      background: string;
      paper: string;
    };
  }
}
