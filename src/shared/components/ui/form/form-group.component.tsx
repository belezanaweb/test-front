import * as React from 'react';

import { IFormGroupProps } from './form.interface';
import * as Styled from './form.styled';

export const FormGroup: React.FC<IFormGroupProps> = ({ children, error, errorMessage }) => (
  <Styled.Group>
    {children}
    {error && <span>{errorMessage}</span>}
  </Styled.Group>
);
