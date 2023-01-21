import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { fieldValidation } from "../../helpers/input";
import { InputProps, InputType } from "../../types";

export function Input({
  label,
  name,
  type,
  placeholder,
  inputMaskChange,
  mask,
  value,
  validationLength,
  isValidated,
  setFormValidation
}: InputProps) {
  const [isValid, setIsValid] = useState(isValidated);

  useEffect(() => {
    setIsValid(isValidated);
  }, [isValidated]);

  const handleChange = (text: string) => {
    const value = mask ? mask(text) : text;
    inputMaskChange(value);
  }

  const handleValidation = (text: string) => {
    const validated = fieldValidation(text, validationLength);

    setIsValid(validated);
    setFormValidation({
      reference: name,
      value: validated
    });
  }

  return (
    <Field isValidated={isValid}>
      <Label>{label}</Label>
      <Component
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={(e) => handleValidation(e.target.value)}
        value={value}
        isValidated={isValid}
      />
    </Field>
  );
}

const Field = styled.div<InputType>`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  ${({ isValidated, theme }) => !isValidated && css`
    border-color: ${theme.colors.red400};

    &::after {
      content: "Invalid Field";
      font-size: 12px;
      line-height: 14px;
      color: ${theme.colors.red400};
      position: absolute;
      left: 0;
      bottom: -18px;
    }
  `}
`;

const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.gray400};
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;
  margin-bottom: 5px;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 10px;
  }
`;

const Component = styled.input<InputType>`
  color: ${({ theme }) => theme.colors.black500};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  box-shadow: ${({ theme }) => theme.shadows.input};
  border-radius: 3px;
  height: 45px;
  padding: 14px 13px 12px;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.violet400};
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray100};
    opacity: 1;
  }

  ${({ isValidated, theme }) => !isValidated && css`
    border-color: ${theme.colors.red400};
  `}

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    height: 54px;
  }
`;
