import { useFormik } from "formik";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PriceCartContainer from "../../components/PriceCartContainer";
import { useCart } from "../../contexts/cart";

import { Container, DividedFields, PaymentContainer } from "./styles";
import { validationSchema } from "./validationForm";
import { finishPurchase } from "../../services/cart";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      creditCardNumber: "",
      ownerName: "",
      validateDate: "",
      securityCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      finishPurchase({ ...values, idCart: cart.id! }).then((res) => {
        setCart({ ...cart, paymentData: res.data });
        navigate("/sucessfullPurchase");
      });
    },
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      <div>
        <h2>CARTÃO DE CRÉDITO</h2>
        <PaymentContainer>
          <Input
            name="creditCardNumber"
            dataTestId="creditCardNumber"
            label="Número do cartão:"
            mask="9999.9999.9999.9999"
            placeholder="____.____.____.____"
            onChange={formik.handleChange}
            value={formik.values.creditCardNumber}
            error={
              formik.touched.creditCardNumber &&
              Boolean(formik.errors.creditCardNumber)
            }
            helperText={
              formik.touched.creditCardNumber && formik.errors.creditCardNumber
            }
          />

          <Input
            name="ownerName"
            dataTestId="ownerName"
            label="Nome do Titular:"
            placeholder="Como no cartão"
            value={formik.values.ownerName}
            onChange={formik.handleChange}
            error={formik.touched.ownerName && Boolean(formik.errors.ownerName)}
            helperText={formik.touched.ownerName && formik.errors.ownerName}
          />
          <DividedFields>
            <Input
              name="validateDate"
              dataTestId="validateDate"
              label="Validade (mês/ano):"
              placeholder="__/____"
              mask={"99/9999"}
              onChange={formik.handleChange}
              value={formik.values.validateDate || ""}
              error={
                formik.touched.validateDate &&
                Boolean(formik.errors.validateDate)
              }
              helperText={
                formik.touched.validateDate && formik.errors.validateDate
              }
            />
            <Input
              name="securityCode"
              dataTestId="securityCode"
              label="CVV:"
              mask={"999"}
              placeholder="___"
              value={formik.values.securityCode || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.securityCode &&
                Boolean(formik.errors.securityCode)
              }
              helperText={
                formik.touched.securityCode && formik.errors.securityCode
              }
            />
          </DividedFields>
        </PaymentContainer>
      </div>
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
