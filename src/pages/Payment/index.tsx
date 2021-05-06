import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { Button, Card, Input, Summary, Template, Typography } from "components";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { PaymentProps } from "./types";
import { FormGrid } from "./styles";

const Payment: React.FC<PaymentProps> = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = () => {
    console.log("aqui");
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Template>
        <div>
          <Typography as="h2" bold gutterBottom>
            CARTÃO DE CRÉDITO
          </Typography>
          <Card>
            <FormGrid>
              <Input
                title="Número do cartão:"
                className="card"
                name="card"
                placeholder=""
                type="text"
              />
              <Input
                title="Nome do Titular:"
                className="author"
                name="author"
                placeholder="Como no cartão"
                type="text"
              />
              <Input
                title="Validade (mês/ano):"
                className="valid"
                name="valid"
                placeholder=""
                type="text"
              />
              <Input
                title="CVV:"
                name="cvv"
                className="cvv"
                placeholder=""
                type="text"
              />
            </FormGrid>
          </Card>
        </div>

        <Summary data={[]} />

        <Button as={Link} to="/confirmation">
          FINALIZAR O PEDIDO
        </Button>
      </Template>
    </Form>
  );
};

export default Payment;
