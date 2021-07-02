import React from "react";
import { useRouter } from "next/router";
import { useUserDispatch, useUserState } from "@belezanaweb/store";
import { Button, PurchaseResume, Form, Input } from "@belezanaweb/components";
import { PaymentFormSchema } from "@belezanaweb/utils";

const PaymentPage = () => {
  const dispatch = useUserDispatch();
  const { purchaseItemsResume } = useUserState();

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
      </section>
      <section>
        <PurchaseResume
          subTotal={purchaseItemsResume.subTotal}
          shippingTotal={purchaseItemsResume.shippingTotal}
          discount={purchaseItemsResume.discount}
          total={purchaseItemsResume.total}
        />
      </section>
    </>
  );
};

export default PaymentPage;
