import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    fonts: {
      header: string;
      title: string;
      text: string;
      label: string;
      highlightText: string;
      input: string;
      button: string;
    };

    colors: {
      primary: string;
      secondary: string;
      accent: string;
      darkAccent: string;
      ultraLightGray: string;
      lightGray: string;
      mediumGray: string;
      gray: string;
      lightBlack: string;
      black: string;
      white: string;
      purple: string;
      red: string;
    };

    shadows: {
      paper: string;
    }
  }
}
