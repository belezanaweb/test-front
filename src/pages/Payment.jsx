import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Button } from "../components/Button";
import { InputField } from "../components/InputField";

import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { PriceList } from "../components/PriceList";

export function Payment() {

  const { state } = useLocation();

  const { register, handleSubmit, formState: { errors }, } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Header activeItem='pagamento'></Header>
      <Content title='Cartão de Crédito' type='white'>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            fieldName='cardNumber'
            label="Número do cartão:"
            placeholder="____.____.____.____"
            register={register}
            errors={errors}>
          </InputField>
          <InputField
            fieldName='cardHolderName'
            label="Nome do Titular:"
            placeholder="Como no cartão"
            register={register}
            errors={errors}>
          </InputField>
          <InputField
            fieldName='cardValidity'
            label="Validade (mês/ano):"
            placeholder="__/____"
            register={register}
            errors={errors}>
          </InputField>
          <InputField
            fieldName='cardVerificationValue'
            label="CVV:"
            placeholder="___"
            register={register}
            errors={errors}>
          </InputField>
        </form>
      </Content>
      <Content>
        <PriceList prices={{subTotal: state.data.subTotal, shippingTotal: state.data.shippingTotal, discount: state.data.discount, total: state.data.total}}/>
      </Content>
      <Button path="/success" data={state.data}>Finalizar o pedido</Button>
    </>
  )
}