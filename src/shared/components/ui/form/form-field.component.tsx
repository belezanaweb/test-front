import * as React from 'react';

import { IFormFieldProps } from './form.interface';
import * as Styled from './form.styled';

export const FormField: React.FC<IFormFieldProps> = ({ name, id, ref, type = 'text' }) => (
  <Styled.Field id={id} name={name} ref={ref} type={type} />
);
