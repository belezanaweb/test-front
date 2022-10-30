import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, InputMask } from "./styles";
import { colors } from "../../utils/style-config";
import { InputBaseComponentProps } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.inputFocusColor,
    },
  },
  typography: {
    fontFamily: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { size: "small" },
          style: {
            maxWidth: "100%",
            fontWeight: 700,
          },
        },
      ],
      styleOverrides: {
        root: {
          letterSpacing: "1.37px",
        },
      },
    },
  },
});

interface IProps {
  as?: any;
  name?: string;
  label: string;
  value?: string;
  mask?: string | RegExp[];
  placeholder?: string;
  error?: boolean;
  helperText?: React.ReactNode;
  inputComponent?: React.ElementType<InputBaseComponentProps>;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const Input = ({
  name,
  label,
  value,
  mask,
  placeholder,
  error,
  helperText,
  onChange,
}: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <label>{label}</label>
        <InputMask
          name={name}
          mask={mask || ""}
          placeholder={placeholder}
          error={error}
          onChange={onChange}
        />
        <span>{helperText}</span>
      </Container>
    </ThemeProvider>
  );
};

export default Input;
