import React from "react";
import { ThemeProps } from "./types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";
import theme from "./light";

const Theme: React.FC<ThemeProps> = ({ children }: ThemeProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default Theme;
