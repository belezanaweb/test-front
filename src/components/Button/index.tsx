import React from 'react';
import { Container } from './styles';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  role = 'button',
  ...rest
}) => {
  return (
    <Container className={className} role={role} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
