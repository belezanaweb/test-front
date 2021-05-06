import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import {
  Button,
  Card,
  Input,
  Summary,
  SummaryItem,
  Template,
  Typography,
} from "components";
import React, { useRef } from "react";
import { useTheme } from "styled-components";
import { PaymentProps } from "./types";

const Payment: React.FC<PaymentProps> = () => {
  const { colors } = useTheme();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = () => {
    console.log("aqui");
  };

  return (
    <Template>
      <div>
        <Typography as="h2" bold gutterBottom>
          CARTÃO DE CRÉDITO
        </Typography>
        <Card>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              title="Número do cartão:"
              name="card"
              placeholder=""
              type="text"
            />
            <Input
              title="Nome do Titular:"
              name="author"
              placeholder="Como no cartão"
              type="text"
            />
            <Input
              title="Validade (mês/ano):"
              name="valid"
              placeholder=""
              type="text"
            />
            <Input title="CVV:" name="cvv" placeholder="" type="text" />
          </Form>
        </Card>
      </div>

      <Summary>
        <SummaryItem color={colors.dark} label="PRODUTOS" value="R$ 624,80" />
        <SummaryItem color={colors.dark} label="FRETE" value="R$ 5,30" />
        <SummaryItem
          color={colors.primary.light}
          label="DESCONTO"
          value="- R$ 30,00"
        />
        <SummaryItem color={colors.dark} bold label="TOTAL" value="R$ 600,10" />
      </Summary>

      <Button>FINALIZAR O PEDIDO</Button>
    </Template>
  );
};

export default Payment;
