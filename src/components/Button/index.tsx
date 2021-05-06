import React from "react";
import { Container } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
