import React from "react";
import { Container, InputMask } from "./styles";
import { InputBaseComponentProps } from "@mui/material";

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
  );
};

export default Input;
