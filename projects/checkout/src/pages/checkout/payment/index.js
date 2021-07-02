import React from "react";
import { useRouter } from "next/router";

import { Button, PurchaseResume, Form, Input } from "@belezanaweb/components";
import { PaymentFormSchema } from "@belezanaweb/utils";

const PaymentPage = () => {
  const router = useRouter();

  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    console.log(values);
    setSubmitting(false);
    // router.push("/checkout/confirmation");
  };
  return (
    <>
      <nav>
        <ul>
          <li>Sacola</li>
          <li>Pagamento</li>
          <li>Confirmação</li>
        </ul>
      </nav>
      <section>
        <h1>Cartão de Crédito</h1>
        <Form
          initialValues={{
            cardNumber: "",
            cardOwner: "",
            cardValidation: "",
            cardCVV: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={PaymentFormSchema}
        >
          <Input
            label="Número do cartão"
            id="frm-payment-card-number"
            name="cardNumber"
            placeholder="_ _ _ _._ _ _ _._ _ _ _._ _ _ _"
          />
          <Input
            label="Nome do Titular"
            id="frm-payment-owner"
            name="cardOwner"
            placeholder="Como no cartão"
          />
          <Input
            label="Validade mês/ano"
            id="frm-payment-validation"
            name="cardValidation"
            placeholder="_ _/_ _ _"
          />
          <Input
            label="CVV"
            id="frm-payment-cvv"
            name="cardCVV"
            placeholder="_ _ _"
          />
          <Button label="Finalizar o pedido" />
        </Form>
        {/* <form>
          <fieldset>
            <ul>
              <li>
                <label for="card-number">Número do cartão</label>
                <input name="card-number" />
              </li>
              <li>
                <label for="card-owner">Nome do tituloar</label>
                <input name="card-owner" />
              </li>
              <li>
                <label for="card-validate">Validade</label>
                <input name="card-validate" />
              </li>
              <li>
                <label for="card-cvv">CVV</label>
                <input name="card-cvv" />
              </li>
            </ul>
          </fieldset>
        </form> */}
      </section>
      <section>
        <PurchaseResume
          subTotal="624.8"
          shippingTotal="5.3"
          discount="30"
          total="618.9"
        />
      </section>
    </>
  );
};

export default PaymentPage;
