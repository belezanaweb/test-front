import React from "react";
import { ThemeProps } from "./types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";
import theme from "./config/light";

const Theme: React.FC<ThemeProps> = ({ children }: ThemeProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Theme;
