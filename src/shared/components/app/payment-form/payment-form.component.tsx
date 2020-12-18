import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import valid from 'card-validator';

import { TPaymentData } from './payment-form.interface';

import Form, { FormGroup, FormLabel, FormField } from '../../ui/form';
import Button from '../../ui/button';

const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório').min(3, 'Mínimo 3 caracteres').trim(),
  creditCardNumber: yup
    .string()
    .required('O número do cartão é obrigatório')
    .test('required', 'O número do cartão é inválido', (value) => valid.number(value).isValid),
  expires: yup.number().required('A validade é obrigatória').typeError('Apenas números'),
  securityCode: yup
    .number()
    .typeError('Apenas números')
    .min(3, 'Mínimo 3 números')
    .max(4, 'Máximo 4 números')
    .required('O código de segurança é obrigatório'),
});

export const PaymentForm = () => {
  const { register, handleSubmit, errors } = useForm<TPaymentData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = React.useCallback((data: TPaymentData) => {
    console.log('data', data);
  }, []);

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <>
        <FormGroup error={errors.creditCardNumber?.message}>
          <FormLabel htmlFor="creditCardNumber">Número do cartão:</FormLabel>
          <FormField
            type="text"
            id="creditCardNumber"
            name="creditCardNumber"
            inputRef={register}
            error={!!errors.creditCardNumber}
          />
        </FormGroup>
        <FormGroup error={errors.name?.message}>
          <FormLabel htmlFor="name">Nome do Titular:</FormLabel>
          <FormField
            placeholder="Como no cartão"
            type="text"
            id="name"
            name="name"
            inputRef={register}
            error={!!errors.name}
          />
        </FormGroup>
        <FormGroup error={errors.expires?.message}>
          <FormLabel htmlFor="expires">Validade (mês/ano):</FormLabel>
          <FormField type="text" id="expires" name="expires" inputRef={register} error={!!errors.expires} />
        </FormGroup>
        <FormGroup error={errors.securityCode?.message}>
          <FormLabel htmlFor="securityCode">CVV:</FormLabel>
          <FormField
            type="text"
            id="securityCode"
            name="securityCode"
            inputRef={register}
            error={!!errors.securityCode}
          />
        </FormGroup>
        <Button type="submit" block={true}>
          Finalizar o pedido
        </Button>
      </>
    </Form>
  );
};
