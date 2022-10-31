import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PriceCartContainer from "../../components/PriceCartContainer";
import { useCart } from "../../contexts/cart";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, DividedFields, PaymentContainer } from "./styles";
import { validationSchema } from "./validationForm";
import { finishPurchase } from "../../services/cart";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useError } from "../../contexts/error";

interface IFormValues {
  creditCardNumber: string;
  ownerName: string;
  validateDate: string;
  securityCode: string;
}

const Payment = () => {
  const { cart, setCart } = useCart();
  const { setError } = useError();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      creditCardNumber: "",
      ownerName: "",
      validateDate: "",
      securityCode: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const inputProps = (
    name: "creditCardNumber" | "ownerName" | "validateDate" | "securityCode"
  ) => {
    return {
      ...register(name),
      innerRef: register(name).ref,
      error: Boolean(errors[name]?.message),
      helperText: errors[name]?.message as string,
    };
  };

  const onSubmit = (values: IFormValues) => {
    finishPurchase({ ...values, idCart: cart.id! })
      .then((res) => {
        setCart({ ...cart, paymentData: res.data });
        navigate("/sucessfullPurchase");
      })
      .catch(() => {
        setError(
          "Ocorreu um erro na solicitação! Por favor, valide os dados do cartão e tente novamente."
        );
      });
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>CARTÃO DE CRÉDITO</h2>
        <PaymentContainer>
          <Input
            {...inputProps("creditCardNumber")}
            dataTestId="creditCardNumber"
            label="Número do cartão:"
            mask="9999.9999.9999.9999"
            placeholder="____.____.____.____"
          />

          <Input
            {...inputProps("ownerName")}
            dataTestId="ownerName"
            label="Nome do Titular:"
            mask=""
            placeholder="Como no cartão"
            onChange={(event) => {
              setValue("ownerName", event.target.value);
            }}
          />
          <DividedFields>
            <Input
              {...inputProps("validateDate")}
              dataTestId="validateDate"
              label="Validade (mês/ano):"
              placeholder="__/____"
              mask={"99/9999"}
              {...inputProps("validateDate")}
            />
            <Input
              {...inputProps("securityCode")}
              dataTestId="securityCode"
              label="CVV:"
              mask={"999"}
              placeholder="___"
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
