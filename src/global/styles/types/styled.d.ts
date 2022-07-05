import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    fonts: {
      header: string;
      title: string;
      text: string;
      button: string;
    };

    colors: {
      primary: string;
      secondary: string;
      accent: string;
      darkAccent: string;
      disabled: string;
      background: string;
      white: string;
    };

    shadows: {
      paper: string;
    }
  }
}
