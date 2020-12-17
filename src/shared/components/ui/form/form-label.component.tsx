import * as React from 'react';

import { IFormLabelProps } from './form.interface';
import * as Styled from './form.styled';

export const FormLabel: React.FC<IFormLabelProps> = ({ htmlFor, children }) => (
  <Styled.Label htmlFor={htmlFor}>{children}</Styled.Label>
);
