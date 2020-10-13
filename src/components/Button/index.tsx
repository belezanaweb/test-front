import React from 'react';
import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({
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
