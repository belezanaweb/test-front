import * as React from 'react';

import { IFormGroupProps } from './form.interface';
import * as Styled from './form.styled';

export const FormGroup: React.FC<IFormGroupProps> = ({ children, error }) => (
  <Styled.Group>
    {children}
    {error && <Styled.Error>{error}</Styled.Error>}
  </Styled.Group>
);
