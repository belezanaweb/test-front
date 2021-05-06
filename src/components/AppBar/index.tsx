import React from "react";
import { Container } from "./styles";
import { AppBarProps } from "./types";

const AppBar: React.FC<AppBarProps> = ({ children }: AppBarProps) => {
  return <Container>{children}</Container>;
};

export default AppBar;
