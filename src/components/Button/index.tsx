import React from 'react';
import { Custom, CustomProps } from './Button.styled';

const Button: React.FC<CustomProps> = ({ children, ...rest }): React.ReactElement => (
  <Custom {...rest}>
    {children}
  </Custom>
);

export default Button;
