import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { Button, Card, Input, Summary, Template, Typography } from "components";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { PaymentProps } from "./types";

const Payment: React.FC<PaymentProps> = () => {
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

      <Summary data={[]} />

      <Button as={Link} to="/confirmation">
        FINALIZAR O PEDIDO
      </Button>
    </Template>
  );
};

export default Payment;
