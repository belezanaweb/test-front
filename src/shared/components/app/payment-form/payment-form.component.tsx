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
    .test('required', 'O número do cartão é inválido', (value) => valid.number(value?.replace(/ /g, '')).isValid),
  expires: yup
    .string()
    .min(7, 'Mínimo 6 números')
    .required('Campo obrigatório')
    .test('required', 'O validade é inválida', (value) => value?.replace(/[/]/g, '').length === 6),
  securityCode: yup.string().min(3, 'Mínimo 3 números').max(4, 'Máximo 4 números').required('Campo obrigatório'),
});

export const PaymentForm = ({ html }: { html?: JSX.Element }) => {
  const { register, handleSubmit, errors } = useForm<TPaymentData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = React.useCallback((data: TPaymentData) => {
    console.log('data', data);
  }, []);

  const [creditCardNumber, setCreditCardNumber] = React.useState('');
  const [securityCode, setSecurityCode] = React.useState('');
  const [name, setName] = React.useState('');
  const [expires, setExpires] = React.useState('');

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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                setCreditCardNumber(utils.mask.creditCardNumber(value));
              }}
              error={!!errors.creditCardNumber}
              value={creditCardNumber}
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                setName(utils.mask.name(value));
              }}
              value={name}
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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const { value } = event.target;
                      setExpires(utils.mask.expires(value));
                    }}
                    value={expires}
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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const { value } = event.target;
                      setSecurityCode(utils.mask.securityCode(value));
                    }}
                    value={securityCode}
                  />
                </>
              </FormGroup>
            </GridCol>
          </>
        </Grid>
        {html && html}
        <Button type="submit" block={true}>
          Finalizar o pedido
        </Button>
      </>
    </Form>
  );
};
