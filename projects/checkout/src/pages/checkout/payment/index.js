import React, { useRef } from "react";
import Router from "next/router";
import * as Yup from "yup";
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
import { PaymentFormSchema } from "@belezanaweb/utils";

const PaymentPage = () => {
  const dispatch = useUserDispatch();
  const { purchaseItemsResume } = useUserState();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    
    try {
      /**
       * get the validation schemas from our validations script and
       * make sure Yup won't validate the field before get all erros
       */
      await PaymentFormSchema.validate(data, {
        abortEarly: false,
      });

      /**
       * reset error messages
       */
      formRef.current.setErrors({});

      /**
       * keep ony last 4 digits from credit card number
       */
      const { cardNumber } = data;
      const hiddenCardNumber = cardNumber.replace(/[0-9](?=.{4})/gm, "*");

      /**
       * save purchase items price resume into store
       */
      dispatch({
        type: "saveCreditCardDetails",
        value: {
          number: hiddenCardNumber,
          name: data.cardOwner,
          expirationDate: data.cardValidation,
        },
      });

      Router.push("/checkout/confirmation");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        /**
         * create an errors array
         */
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        /**
         * use setErros from @unform lib to allow component
         * to show error messages according to Yup schemas messages
         */
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <>
      <Header>
        <Navigation active="Pagamento" />
      </Header>
      <MainWrapper>
        <Container label="Cartão de crédito">
          <FormCreditCardPayment formRef={formRef} onSubmit={handleSubmit} />
        </Container>

        <PurchaseResume
          subTotal={purchaseItemsResume.subTotal}
          shippingTotal={purchaseItemsResume.shippingTotal}
          discount={purchaseItemsResume.discount}
          total={purchaseItemsResume.total}
        />
      </MainWrapper>
      <Footer>
        <Button form="form" label="Finalizar o pedido" type="submit" />
      </Footer>
    </>
  );
};

export default PaymentPage;
