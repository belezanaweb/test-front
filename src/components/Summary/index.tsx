import React from "react";
import { Container } from "./styles";
import { SummaryProps } from "./types";

const Summary: React.FC<SummaryProps> = ({ children }: SummaryProps) => {
  return <Container>{children}</Container>;
};

export default Summary;
