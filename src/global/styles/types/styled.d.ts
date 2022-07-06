import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    fonts: {
      header: string;
      title: string;
      text: string;
      highlightText: string;
      button: string;
    };

    colors: {
      primary: string;
      secondary: string;
      accent: string;
      darkAccent: string;
      disabled: string;
      gray: string;
      black: string;
      white: string;
    };

    shadows: {
      paper: string;
    }
  }
}
