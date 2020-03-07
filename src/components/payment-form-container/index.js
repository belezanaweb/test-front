import React from 'react';
import styled from 'styled-components';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Cardboard, TextField, Title, Button } from '..';
import yupTransformDate from '../../lib/yup-transform-date';

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: 50%;
    margin-right: 1.2rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const cardNumberMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

const cardExpirationDateMask = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

const cardCVVMask = [/\d/, /\d/, /\d/, /\d/];

const PaymentFormContainer = function({ children }) {
  return (
    <>
      <Title>Cartão de Crédito</Title>
      <Formik
        initialValues={{
          card_number: '',
          card_holder_name: '',
          card_expiration_date: '',
          card_cvv: ''
        }}
        validationSchema={Yup.object().shape({
          card_number: Yup.string()
            .required('O número do cartão é obrigatório.')
            .matches(/^[\d.]{17,19}$/, 'O número do cartão é inválido'),
          card_holder_name: Yup.string()
            .required('O nome do titular é obrigatório.')
            .matches(/^[a-zA-Z]{2,}(?:[a-zA-Z]+){0,2}$/, 'Escreva um nome válido.'),
          card_expiration_date: Yup.date()
            .transform(yupTransformDate)
            .min(new Date(), 'A validade do cartão está expirada.')
            .typeError('A data está inválida.')
            .required('A validade do cartão é obrigatória.'),
          card_cvv: Yup.string()
            .matches(/^\d{3,4}$/, 'O CVV deve ter entre 3 e 4 números.')
            .required('O CVV é obrigatório')
        })}
      >
        {props => {
          const { values, errors, touched, handleBlur, handleChange, handleSubmit } = props;

          return (
            <form onSubmit={handleSubmit} data-testid="creadit-card-form">
              <Cardboard>
                <TextField
                  label="Número do cartão:"
                  id="card_number"
                  placeholder="____.____.____.____"
                  mask={cardNumberMask}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.card_number}
                  error={touched.card_number && errors.card_number}
                />

                <TextField
                  label="Nome do Titular:"
                  id="card_holder_name"
                  placeholder="Como no cartão"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.card_holder_name.toUpperCase()}
                  error={touched.card_holder_name && errors.card_holder_name}
                />

                <CardRow>
                  <TextField
                    label="Validade (mês/ano):"
                    id="card_expiration_date"
                    placeholder="__/____"
                    mask={cardExpirationDateMask}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.card_expiration_date}
                    error={touched.card_expiration_date && errors.card_expiration_date}
                  />

                  <TextField
                    label="CVV:"
                    id="card_cvv"
                    placeholder="____"
                    mask={cardCVVMask}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.card_cvv}
                    error={touched.card_cvv && errors.card_cvv}
                  />
                </CardRow>
              </Cardboard>

              {children}
              <Button type="submit">Finalizar o Pedido</Button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default PaymentFormContainer;
