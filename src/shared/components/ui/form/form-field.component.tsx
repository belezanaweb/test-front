import * as React from 'react';

import { IFormFieldProps } from './form.interface';
import * as Styled from './form.styled';

export const FormField: React.FC<IFormFieldProps> = ({
  name,
  id,
  inputRef,
  type = 'text',
  placeholder,
  value,
  error,
}) => (
  <Styled.Field id={id} name={name} ref={inputRef} type={type} placeholder={placeholder} value={value} error={error} />
);
