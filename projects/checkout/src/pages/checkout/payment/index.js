import React from "react";
import { useRouter } from "next/router";
import { useUserDispatch, useUserState } from "@belezanaweb/store";
import {
  Header,
  MainWrapper,
  Container,
  Footer,
  Navigation,
  PurchaseResume,
  Button,
  Form,
  Input,
} from "@belezanaweb/components";
import { PaymentFormSchema } from "@belezanaweb/utils";

const PaymentPage = () => {
  const dispatch = useUserDispatch();
  const { purchaseItemsResume } = useUserState();

  const router = useRouter();

  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    setSubmitting(false);
    // router.push("/checkout/confirmation");
  };
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <MainWrapper>
        <Container label="Cartão de crédito">
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
          </Form>
        </Container>

        <PurchaseResume
          subTotal={purchaseItemsResume.subTotal}
          shippingTotal={purchaseItemsResume.shippingTotal}
          discount={purchaseItemsResume.discount}
          total={purchaseItemsResume.total}
        />
      </MainWrapper>
      <Footer>
        <Button label="Finalizar o pedido" />
      </Footer>
    </>
  );
};

export default PaymentPage;
