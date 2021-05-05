import React from "react";

import { Container } from "./styles";
import { LoadingProps } from "./types";

const Loading: React.FC<LoadingProps> = ({
  children = "Carregando",
  ...rest
}: LoadingProps) => <Container {...rest}>{children}</Container>;

export default React.memo(Loading);
