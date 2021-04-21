import React from "react";

import { Container } from "./styles";

export const Text = ({ children, type }) => (
  <Container type={type}>{children}</Container>
);
