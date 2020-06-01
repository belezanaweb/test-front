import React from 'react';
import styled, { css } from 'styled-components';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';

const StyledTextField = styled.label`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  line-height: 14px;
  padding: 3px 0;
`;

interface InputProps extends MaskedInputProps {
  error: 'true' | 'false';
}

const Input = styled(MaskedInput)<InputProps>`
  background-color: white;
  border: 1px solid #E7E7E7;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grayExtraDark};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  height: 45px;
  margin: 5px 0 0;
  outline: none;
  padding: 12px;
  line-height: 19px;

  ${({ error }) => (error === 'true' && css`
    border-color: ${({ theme }) => theme.colors.danger};
  `)}

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayLight};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

Input.defaultProps = {};

interface TextFieldProps extends MaskedInputProps {
  error?: string;
  label?: string;
  inputRef?: (ref: any) => void;
}

const TextField: React.FC<TextFieldProps> = ({ error, inputRef, label, ...props }) => {
  function renderErrors() {
    if (typeof error !== 'string') return null;
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <StyledTextField>
      <Label>{label}</Label>
      <Input error={typeof error === 'string' ? 'true' : 'false'} ref={inputRef} {...props} />
      {renderErrors()}
    </StyledTextField>
  );
}

TextField.defaultProps = {
  type: 'text',
  mask: false,
};

export default TextField;
