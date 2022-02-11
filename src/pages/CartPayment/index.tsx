import React, { useRef, useCallback, useState, useEffect } from 'react';
import * as Yup from 'yup';
import Cards, { Focused } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useNavigate } from 'react-router';

import getValidationError from '../../helpers/validations';
import { getFromLocalStorage, setToLocalStorage } from '../../helpers/local-storage';
import { BELEZA_NA_WEB_CREDIT_CARD } from '../../constants/local-storage';

import {
  CARD_NUMBER_PLACEHOLDER,
  CVV_PLACEHOLDER,
  DATE_PLACEHOLDER,
  TITULAR_NAME_PLACEHOLDER
} from '../../constants/placeholder';

import Button from '../../components/Button';
import Input from '../../components/Input';
import SumInfo from '../../components/SumInfo';
import { useCart } from '../../hooks/useCart';

import { Container, FormContent, FormGroup, Content, InputsContent, CartContent } from './styles';

interface PaymentInfo {
  cardNumber: string;
  titularName: string;
  validate: string;
  cvv: string;
  focused: Focused;
}

export default function CartPayment() {
  const formRef = useRef<FormHandles>(null);
  const { creditCardInfo, setCreditCardInfo, cartItems } = useCart();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({} as PaymentInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems?.length === 0) navigate('/', { replace: true });
  }, []);

  const validForm = async () => {
    try {
      const data = formRef?.current?.getData();

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        cardNumber: Yup.string().required('Digite o número do cartão'),
        titularName: Yup.string().required('Digite o nome do titular'),
        validate: Yup.string().required('Digite a validade do cartão'),
        cvv: Yup.string().required('Digite o código do cartão')
      });

      await schema.validate(data, { abortEarly: false });

      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationError(err);
        formRef.current?.setErrors(errors);
        return;
      }

      return false;
    }
  };

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPaymentInfo({
        ...paymentInfo,
        [e.currentTarget.id]: e.currentTarget.value
      });
    },
    [paymentInfo]
  );

  const handleInputFocus = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPaymentInfo({
        ...paymentInfo
        // focused: e.currentTarget.id
      });
    },
    [paymentInfo]
  );

  const handleSubmit = useCallback(async (data: any) => {
    const formIsValid = await validForm();

    if (formIsValid) {
      setCreditCardInfo(data);
      setToLocalStorage(BELEZA_NA_WEB_CREDIT_CARD, data);
      navigate('/cart/confirmation', { replace: true });
    }
  }, []);

  useEffect(() => {
    const creditCardFromStorage = getFromLocalStorage(BELEZA_NA_WEB_CREDIT_CARD);
    setCreditCardInfo(creditCardFromStorage);
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>CARTÃO DE CRÉDITO</h2>
        <Content>
          <FormContent>
            <InputsContent>
              <fieldset>
                <label htmlFor="cardNumber">Número do cartão:</label>
                <Input
                  name="cardNumber"
                  type="text"
                  placeholder={CARD_NUMBER_PLACEHOLDER}
                  mask="creditCard"
                  defaultValue={creditCardInfo?.cardNumber || ''}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  radius="all"
                />
              </fieldset>

              <fieldset>
                <label htmlFor="titularName">Nome do Titular:</label>
                <Input
                  name="titularName"
                  type="text"
                  placeholder={TITULAR_NAME_PLACEHOLDER}
                  mask="titularName"
                  defaultValue={creditCardInfo?.titularName || ''}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  radius="all"
                />
              </fieldset>

              <FormGroup>
                <fieldset>
                  <label htmlFor="validate">Validade (mês/ano):</label>
                  <Input
                    name="validate"
                    type="text"
                    placeholder={DATE_PLACEHOLDER}
                    mask="date"
                    defaultValue={creditCardInfo?.validate || ''}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    radius="all"
                  />
                </fieldset>

                <fieldset>
                  <label htmlFor="cvv">CVV:</label>
                  <Input
                    name="cvv"
                    type="text"
                    placeholder={CVV_PLACEHOLDER}
                    mask="cvv"
                    defaultValue={creditCardInfo?.cvv || ''}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    radius="all"
                  />
                </fieldset>
              </FormGroup>
            </InputsContent>

            <CartContent>
              <Cards
                focused={paymentInfo?.focused || ''}
                cvc={paymentInfo?.cvv || ''}
                expiry={paymentInfo?.validate || ''}
                name={paymentInfo?.titularName || ''}
                number={paymentInfo?.cardNumber || ''}
              />
            </CartContent>
          </FormContent>

          <SumInfo />
          <Button type="submit" title="Finalizar Pagamento" />
        </Content>
      </Form>
    </Container>
  );
}
