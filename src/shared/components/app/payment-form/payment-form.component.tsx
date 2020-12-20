import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import valid from 'card-validator';

import { TPaymentData } from './payment-form.interface';

import Form, { FormGroup, FormLabel, FormField } from '../../ui/form';
import Button from '../../ui/button';
import Grid, { GridCol } from '../../ui/grid';

import utils from '../../../utils';

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório').min(3, 'Mínimo 3 caracteres').trim(),
  creditCardNumber: yup
    .string()
    .required('Campo obrigatório')
    .test(
      'required',
      'O número do cartão é inválido',
      (value) => valid.number(value?.replace(/ /g, '').trim()).isValid
    ),
  expires: yup
    .string()
    .min(7, 'Mínimo 6 números')
    .required('Campo obrigatório')
    .test('required', 'O validade é inválida', (value) => value?.replace(/[/]/g, '').trim().length === 6),
  securityCode: yup.string().min(3, 'Mínimo 3 números').max(4, 'Máximo 4 números').required('Campo obrigatório'),
});

export const PaymentForm = ({ html, onClick }: { html?: JSX.Element; onClick?: (data: any) => any }) => {
  const { register, handleSubmit, errors } = useForm<TPaymentData>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = React.useCallback((data: TPaymentData) => {
    if (onClick) {
      onClick(data);
    }
  }, []);

  const [creditCardNumber, setCreditCardNumber] = React.useState('');
  const [securityCode, setSecurityCode] = React.useState('');
  const [name, setName] = React.useState('');
  const [expires, setExpires] = React.useState('');
  const [enableSubmit, setEnableSubmit] = React.useState(false);

  const handleCreditCardNumberChange = (value: string) => setCreditCardNumber(value);
  const handleNameChange = (value: string) => setName(value);
  const handleExpiresChange = (value: string) => setExpires(value);
  const handleSecurityCodeChange = (value: string) => setSecurityCode(value);

  schema
    .isValid({
      creditCardNumber,
      securityCode,
      name,
      expires,
    })
    .then((valid) => {
      setEnableSubmit(valid);
    });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <>
        <FormGroup error={errors.creditCardNumber?.message}>
          <>
            <FormLabel htmlFor="creditCardNumber">Número do cartão:</FormLabel>
            <FormField
              type="text"
              id="creditCardNumber"
              name="creditCardNumber"
              placeholder="____-____-____-____"
              inputRef={register}
              onChange={handleCreditCardNumberChange}
              mask={utils.mask.creditCardNumber}
              error={!!errors.creditCardNumber}
              initialValue={creditCardNumber}
            />
          </>
        </FormGroup>
        <FormGroup error={errors.name?.message}>
          <>
            <FormLabel htmlFor="name">Nome do Titular:</FormLabel>
            <FormField
              placeholder="Como no cartão"
              type="text"
              id="name"
              name="name"
              inputRef={register}
              error={!!errors.name}
              onChange={handleNameChange}
              mask={utils.mask.name}
              initialValue={name}
            />
          </>
        </FormGroup>
        <Grid>
          <>
            <GridCol xs={6}>
              <FormGroup error={errors.expires?.message}>
                <>
                  <FormLabel htmlFor="expires">Validade (mês/ano):</FormLabel>
                  <FormField
                    placeholder="__/____"
                    type="text"
                    id="expires"
                    name="expires"
                    inputRef={register}
                    error={!!errors.expires}
                    onChange={handleExpiresChange}
                    mask={utils.mask.expires}
                    initialValue={expires}
                  />
                </>
              </FormGroup>
            </GridCol>
            <GridCol xs={5} xsOffset={1}>
              <FormGroup error={errors.securityCode?.message}>
                <>
                  <FormLabel htmlFor="securityCode">CVV:</FormLabel>
                  <FormField
                    placeholder="___"
                    type="text"
                    id="securityCode"
                    name="securityCode"
                    inputRef={register}
                    error={!!errors.securityCode}
                    onChange={handleSecurityCodeChange}
                    mask={utils.mask.securityCode}
                    initialValue={securityCode}
                  />
                </>
              </FormGroup>
            </GridCol>
          </>
        </Grid>
        {html && html}
        <Button type="submit" block={true} disabled={!enableSubmit}>
          Finalizar o pedido
        </Button>
      </>
    </Form>
  );
};
