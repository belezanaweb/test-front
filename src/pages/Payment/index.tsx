import { useFormik } from "formik";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PriceCartContainer from "../../components/PriceCartContainer";
import { useCart } from "../../contexts/cart";
import InputMask from "react-input-mask";

import { Container, DividedFields, PaymentContainer } from "./styles";
import { validationSchema } from "./validationForm";
import { finishPurchase } from "../../services/cart";

const Payment = () => {
  const { cart } = useCart();

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      ownerName: "",
      validateDate: null,
      securityCode: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      finishPurchase(values);
    },
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      <h2>CARTÃO DE CRÉDITO</h2>
      <PaymentContainer>
        <Input
          name="cardNumber"
          label="Número do cartão:"
          mask="9999.9999.9999.9999"
          placeholder="____.____.____.____"
          onChange={formik.handleChange}
          value={formik.values.cardNumber}
          error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
          helperText={formik.touched.cardNumber && formik.errors.cardNumber}
        />

        <Input
          as={InputMask}
          name="ownerName"
          label="Nome do Titular:"
          placeholder="Como no cartão"
          onChange={formik.handleChange}
          error={formik.touched.ownerName && Boolean(formik.errors.ownerName)}
          helperText={formik.touched.ownerName && formik.errors.ownerName}
        />
        <DividedFields>
          <Input
            name="validateDate"
            label="Validade (mês/ano):"
            placeholder="__/____"
            mask={"99/9999"}
            onChange={formik.handleChange}
            error={
              formik.touched.validateDate && Boolean(formik.errors.validateDate)
            }
            helperText={
              formik.touched.validateDate && formik.errors.validateDate
            }
          />
          <Input
            name="securityCode"
            label="CVV:"
            mask={"999"}
            placeholder="___"
            onChange={formik.handleChange}
            error={
              formik.touched.securityCode && Boolean(formik.errors.securityCode)
            }
            helperText={
              formik.touched.securityCode && formik.errors.securityCode
            }
          />
        </DividedFields>
      </PaymentContainer>

      <PriceCartContainer
        discount={cart.discount}
        shippingTotal={cart.shippingTotal}
        subTotal={cart.subTotal}
        total={cart.total}
      />
      <Button type="submit" textContent="Finalizar o pedido" />
    </Container>
  );
};

export default Payment;
