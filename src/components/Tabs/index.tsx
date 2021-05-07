import React from "react";
import { Container } from "./styles";
import { TabsProps } from "./types";

const Tabs: React.FC<TabsProps> = ({ children, ...rest }: TabsProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default React.memo(Tabs);
