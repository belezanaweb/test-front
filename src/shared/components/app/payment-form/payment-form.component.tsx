import * as React from 'react';
import { useForm } from 'react-hook-form';
import { TPaymentData } from './payment-form.interface';

import Form, { FormGroup, FormLabel, FormField } from '../../ui/form';
import Button from '../../ui/button';

export const PaymentForm = () => {
  const { register, handleSubmit, errors } = useForm<TPaymentData>();

  const onSubmit = (data: TPaymentData) => {
    console.log('data', data);
  };

  const errorName = (errors.name && errors.name.type === 'required') || false;
  const errorCreditCardNumber = (errors.creditCardNumber && errors.creditCardNumber.type === 'required') || false;
  const errorExpires = (errors.expires && errors.expires.type === 'required') || false;
  const errorCVV = (errors.cvv && errors.cvv.type === 'required') || false;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <>
        <FormGroup error={errorCreditCardNumber} errorMessage="Erro no número">
          <FormLabel htmlFor="creditCardNumber">Número do cartão:</FormLabel>
          <FormField type="text" id="creditCardNumber" name="creditCardNumber" ref={register({ required: true })} />
        </FormGroup>
        <FormGroup error={errorName} errorMessage="Erro no nome">
          <FormLabel htmlFor="name">Nome do Titular:</FormLabel>
          <FormField type="text" id="name" name="name" ref={register({ required: true })} />
        </FormGroup>
        <FormGroup error={errorExpires} errorMessage="Erro na validade">
          <FormLabel htmlFor="expires">Validade (mês/ano):</FormLabel>
          <FormField type="text" id="expires" name="expires" ref={register({ required: true })} />
        </FormGroup>
        <FormGroup error={errorCVV} errorMessage="Erro na validade">
          <FormLabel htmlFor="cvv">CVV:</FormLabel>
          <FormField type="text" id="cvv" name="cvv" ref={register({ required: true })} />
        </FormGroup>
        <Button type="submit" block={true}>
          Finalizar o pedido
        </Button>
      </>
    </Form>
  );
};
