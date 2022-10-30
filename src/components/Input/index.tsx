import React from "react";
import { Container, InputMask } from "./styles";

interface IProps {
  name?: string;
  label: string;
  value?: string;
  dataTestId?: string;
  creditCardNumber?: string;
  mask?: string | RegExp[];
  placeholder?: string;
  error?: boolean;
  helperText?: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const Input = ({
  name,
  label,
  dataTestId,
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
        data-testid={dataTestId}
        name={name}
        mask={mask || ""}
        value={value}
        placeholder={placeholder}
        error={error}
        onChange={onChange}
      />
      <span>{helperText}</span>
    </Container>
  );
};

export default Input;
