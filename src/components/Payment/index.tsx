import Input from "../ui/Input/Index";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from './Payment.schema'
import { handleCardNumberMask, handleCvcMask, handleDateMonthYear } from '../../utils/masks/mask'
import './Payment.scss'
import OrderSummary from "../OrderSummary";
import { useNavigate } from "react-router-dom";

const Payment: FC = () => {

  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(schema, { abortEarly: false }),
  })

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {

    navigate('/confirmation', {state:{formData: data}});
  }
  return (
    <>
      <div className="payment">
        <h1>Cartão de crédito</h1>
        <FormProvider {...methods}>
          <form className="payment_form" onSubmit={handleSubmit(onSubmit)}>
            <Input type="string" name="cardNumber" label="Número" placeholder="0000 0000 0000 0000" required onChange={handleCardNumberMask} />
            <Input name="name" label="Nome do titular" placeholder="Nome impresso no cartão" required />
            <div className="grid-auto-columns">
              <Input name="cardExpiration" label="Data de validade" placeholder="MM/AA" required onChange={handleDateMonthYear} />
              <Input name="cardCvv" label="Código CVV:" placeholder="000" required onChange={handleCvcMask} />
            </div>
          </form>

        </FormProvider>
      </div>
      <OrderSummary text="Finalizar pedido" onClick={handleSubmit(onSubmit)} />

    </>
  );
};

export default Payment;


