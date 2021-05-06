import React from "react";
import { useTheme } from "styled-components";

import { Container } from "./styles";
import { SummaryProps } from "./types";
import { SummaryItem } from "../";

const Summary: React.FC<SummaryProps> = ({ data }: SummaryProps) => {
  const { colors } = useTheme();
  console.log(data);

  return (
    <Container>
      <SummaryItem color={colors.dark} label="PRODUTOS" value="R$ 624,80" />
      <SummaryItem color={colors.dark} label="FRETE" value="R$ 5,30" />
      <SummaryItem
        color={colors.primary.light}
        label="DESCONTO"
        value="- R$ 30,00"
      />
      <SummaryItem color={colors.dark} bold label="TOTAL" value="R$ 600,10" />
    </Container>
  );
};

export default Summary;
