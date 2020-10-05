import React, { InputHTMLAttributes } from 'react';

import { Container, InputElement } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  register: any;
}

const Input: React.FC<InputProps> = ({ label, error, register, ...rest }) => {
  return (
    <Container>
      <label htmlFor={rest.id}>{label}</label>
      <InputElement {...rest} ref={register} error={error} />
      <small>{error}</small>
    </Container>
  );
};

export default Input;
