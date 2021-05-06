import React from "react";
import { Container } from "./styles";
import { TabItemProps } from "./types";

const TabItem: React.FC<TabItemProps> = ({
  children,
  ...rest
}: TabItemProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default TabItem;
