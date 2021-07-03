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
  FormCreditCardPayment,
} from "@belezanaweb/components";
import { useFormikContext } from "formik";

const PaymentPage = () => {
  const dispatch = useUserDispatch();
  const { purchaseItemsResume } = useUserState();

  const router = useRouter();

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <MainWrapper>
        <Container label="Cartão de crédito">
          <FormCreditCardPayment />
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
