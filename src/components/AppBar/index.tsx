import React from "react";
import { Container } from "./styles";
import { AppBarProps } from "./types";

const AppBar: React.FC<AppBarProps> = ({ children, ...rest }: AppBarProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default React.memo(AppBar);
