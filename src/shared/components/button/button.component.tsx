import * as React from 'react';

import { IButtonProps } from './button.interface';
import * as Styled from './button.styled';

export const Button: React.FC<IButtonProps> = ({ children, size = 'medium', onClick }) => (
  <Styled.Button size={size} onClick={onClick}>
    {children}
  </Styled.Button>
);
