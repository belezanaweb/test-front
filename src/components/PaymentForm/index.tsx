import React, { useContext } from 'react';

import { useForm } from "react-hook-form";
import { useNormalize } from "hooks/normalize";
import { PaymentContext } from 'context/payment';

import { Container, Form, DoubleInputs } from './styles';

import Input from 'components/Input';

import { PaymentInfo } from 'models/payment';

const PaymentForm: React.FC = () => {
  const { handleSetPaymentInfo } = useContext(PaymentContext);
  const { register, handleSubmit, errors } = useForm<PaymentInfo>({
    mode: 'onChange',
    shouldFocusError: false
  });
  const { normalizeCardNumber, normalizeDate } = useNormalize();

  const onValidate = (data: PaymentInfo) => {
    const lastCardNumber = data.cardNumber?.split(" ").pop();

    if (!lastCardNumber) return;

    data.lastCardNumber = lastCardNumber;
    data.isValid = true;
    delete data.cardNumber;

    handleSetPaymentInfo(data);
  };

  return (
    <Container>
      <h1>CARTÃO DE CRÉDITO</h1>
      <Form onChange={handleSubmit(onValidate)}>
        <Input
          label="Número do cartão:"
          placeholder="____.____.____.____"
          type="tel"
          name="cardNumber"
          id="cardNumber"
          autoFocus
          maxLength={19}
          onChange={(event) => {
            const { value } = event.target;
            event.target.value = normalizeCardNumber(value);
          }}
          register={register({
            required: true,
            pattern: {
              value: /^\d{4}\s\d{4}\s\d{4}\s\d{4}/,
              message: 'Número do cartão inválido'
            }
          })}
          error={errors.cardNumber?.message}
        />
        <Input
          label="Nome do Titular:"
          placeholder="Como no cartão"
          type="text"
          name="cardName"
          id="cardName"
          maxLength={255}
          register={register({
            required: true,
            minLength: {
              value: 6,
              message: 'Digite um nome válido'
            },
            pattern: {
              value: /^[a-zA-Z ]+$/,
              message: 'Digite um nome válido'
            }
          })}
          error={errors.cardName?.message}
        />
        <DoubleInputs>
          <Input
            label="Validade (mês/ano):"
            placeholder="__/____"
            type="tel"
            name="cardVality"
            id="cardVality"
            maxLength={7}
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeDate(value);
            }}
            register={register({
              required: true,
              minLength: {
                value: 7,
                message: 'Digite uma data válida'
              },
              pattern: {
                value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                message: 'Digite uma data válida'
              }
            })}
            error={errors.cardVality?.message}
          />
          <Input
            label="CVV"
            placeholder="___"
            type="tel"
            name="cardCVV"
            id="cardCVV"
            maxLength={3}
            register={register({
              required: true,
              minLength: {
                value: 3,
                message: 'Digite um código válido'
              },
              pattern: {
                value: /^[0-9]+$/,
                message: 'Digite um código válido'
              }
            })}
            error={errors.cardCVV?.message}
          />
        </DoubleInputs>
      </Form>
    </Container>
  );
};

export default PaymentForm;
