import React from "react";
import { Wrapper } from "./styles";
import { TypographyProps } from "./types";

const Typography: React.FC<TypographyProps> = ({
  children,
  ...rest
}: TypographyProps) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Typography;
