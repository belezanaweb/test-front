import React from "react";

import Typography from "components/Typography";
import { Wrapper } from "./styles";
import { SummaryItemProps } from "./types";

const SummaryItem: React.FC<SummaryItemProps> = ({
  label,
  value,
  ...rest
}: SummaryItemProps) => {
  return (
    <Wrapper>
      <Typography {...rest}>{label}</Typography>
      <Typography {...rest} align="right">
        {value}
      </Typography>
    </Wrapper>
  );
};

export default SummaryItem;
