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
        card: Yup.string().required("Obrigatório"),
        author: Yup.string().required("Obrigatório"),
        valid: Yup.string().required("Obrigatório"),
        cvv: Yup.string().required("Obrigatório"),
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
              <Input.Mask
                mask="999.999.999.999"
                title="Número do cartão:"
                className="card"
                data-testid="card"
                name="card"
                placeholder=""
                type="text"
              />
              <Input.Default
                title="Nome do Titular:"
                className="author"
                data-testid="author"
                name="author"
                placeholder="Como no cartão"
                type="text"
              />
              <Input.Mask
                mask="99/9999"
                title="Validade (mês/ano):"
                className="valid"
                data-testid="valid"
                name="valid"
                placeholder=""
                type="text"
              />
              <Input.Mask
                mask="999"
                title="CVV:"
                data-testid="cvv"
                name="cvv"
                className="cvv"
                placeholder=""
                type="text"
              />
            </FormGrid>
          </Card>
        </div>

        <Summary {...cart} />

        <Button type="submit" data-testid="button-payment">
          FINALIZAR O PEDIDO
        </Button>
      </Template>
    </Form>
  );
};

export default Payment;
