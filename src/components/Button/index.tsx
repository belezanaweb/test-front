import React from "react";
import ButtonMaterial from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors } from "../../styles/style-config";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.buttonDefault,
      contrastText: colors.textButton,
    },
  },
  typography: {
    fontFamily: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          "&:hover": {
            backgroundColor: colors.buttonHover,
          },
          boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -3px 0 0 ${colors.buttonHover}`,
          blur: "4px",
        }),
      },
      variants: [
        {
          props: { size: "large" },
          style: {
            width: "100%",
            height: 60,
            fontWeight: 700,
            fontSize: "2rem",
          },
        },
      ],
    },
  },
});

interface IProps {
  type?: "button" | "submit" | "reset";
  textContent: string;
  onClick?: () => void;
}

const Button = ({ type, textContent, onClick }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonMaterial
        type={type}
        size="large"
        variant="contained"
        onClick={onClick}
      >
        {textContent}
      </ButtonMaterial>
    </ThemeProvider>
  );
};

export default Button;
