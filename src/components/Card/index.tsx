import React from "react";
import { Wrapper } from "./styles";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, ...rest }: CardProps) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Card;
