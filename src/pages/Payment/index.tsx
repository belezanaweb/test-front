import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { Button, Card, Input, Summary, Template, Typography } from "components";
import { useCart } from "hooks/Cart";
import React, { useCallback, useRef } from "react";

import getValidationErrors from "utils/getValidationErrors";
import * as Yup from "yup";
import { FormGrid } from "./styles";
import { PaymentProps } from "./types";
import { useHistory } from "react-router-dom";

const Payment: React.FC<PaymentProps> = () => {
  const { cart } = useCart();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit: SubmitHandler<FormData> = useCallback(async (values) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        card: Yup.string().required("Required"),
        author: Yup.string().required("Required"),
        valid: Yup.string().required("Required"),
        cvv: Yup.string().required("Required"),
      });

      await schema.validate(values, { abortEarly: false });

      history.push("/confirmation");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Template>
        <div>
          <Typography as="h2" bold gutterBottom>
            CARTÃO DE CRÉDITO
          </Typography>
          <Card>
            <FormGrid>
              <Input.Default
                title="Número do cartão:"
                className="card"
                name="card"
                placeholder=""
                type="text"
              />
              <Input.Default
                title="Nome do Titular:"
                className="author"
                name="author"
                placeholder="Como no cartão"
                type="text"
              />
              <Input.Default
                title="Validade (mês/ano):"
                className="valid"
                name="valid"
                placeholder=""
                type="text"
              />
              <Input.Default
                title="CVV:"
                name="cvv"
                className="cvv"
                placeholder=""
                type="text"
              />
            </FormGrid>
          </Card>
        </div>

        <Summary {...cart} />

        <Button type="submit">FINALIZAR O PEDIDO</Button>
      </Template>
    </Form>
  );
};

export default Payment;
