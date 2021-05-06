import React from "react";
import { Wrapper } from "./styles";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children }: CardProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
