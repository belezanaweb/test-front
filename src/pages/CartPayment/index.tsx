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

export default function CartPayment() {
  const formRef = useRef<FormHandles>(null);
  const { creditCardInfo, setCreditCardInfo, cartItems } = useCart();
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (cartItems?.length === 0) navigate('/', { replace: true });
  }, []);

  const validForm = async () => {
    try {
      const data = formRef?.current?.getData();

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        number: Yup.string().required('Digite o número do cartão'),
        name: Yup.string().required('Digite o nome do titular'),
        expiry: Yup.string().required('Digite a validade do cartão'),
        cvc: Yup.string().required('Digite o código do cartão')
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
      setCreditCardInfo({
        ...creditCardInfo,
        [e.currentTarget.id]: e.currentTarget.value
      });
    },
    [creditCardInfo]
  );

  const handleSubmit = useCallback(async (data: any) => {
    const formIsValid = await validForm();

    if (formIsValid) {
      setIsValid(true);
      setCreditCardInfo(data);

      const maskData = {
        ...data,
        cvc: '###'
      };

      setToLocalStorage(BELEZA_NA_WEB_CREDIT_CARD, maskData);
    }
  }, []);

  const handleFocus = (value: any) => {
    const f: Focused = value;

    setCreditCardInfo({
      ...creditCardInfo,
      focused: f
    });
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Content>
          <div>
            <h2>CARTÃO DE CRÉDITO</h2>
            <FormContent>
              <InputsContent>
                <fieldset>
                  <label htmlFor="number">Número do cartão:</label>
                  <Input
                    id="number"
                    name="number"
                    type="text"
                    placeholder={CARD_NUMBER_PLACEHOLDER}
                    mask="creditCard"
                    defaultValue={creditCardInfo?.number || ''}
                    onChange={handleChange}
                    onFocus={(e) => handleFocus(e.target.name)}
                    radius="all"
                  />
                </fieldset>

                <fieldset>
                  <label htmlFor="name">Nome do Titular:</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={TITULAR_NAME_PLACEHOLDER}
                    mask="name"
                    defaultValue={creditCardInfo?.name || ''}
                    onChange={handleChange}
                    onFocus={(e) => handleFocus(e.target.name)}
                    radius="all"
                  />
                </fieldset>

                <FormGroup>
                  <fieldset>
                    <label htmlFor="expiry">Validade (mês/ano):</label>
                    <Input
                      id="expiry"
                      name="expiry"
                      type="text"
                      placeholder={DATE_PLACEHOLDER}
                      mask="date"
                      defaultValue={creditCardInfo?.expiry || ''}
                      onChange={handleChange}
                      onFocus={(e) => handleFocus(e.target.name)}
                      radius="all"
                    />
                  </fieldset>

                  <fieldset>
                    <label htmlFor="cvc">CVV:</label>
                    <Input
                      id="cvc"
                      name="cvc"
                      type="text"
                      placeholder={CVV_PLACEHOLDER}
                      mask="cvc"
                      defaultValue={creditCardInfo?.cvc || ''}
                      onChange={handleChange}
                      onFocus={(e) => handleFocus(e.target.name)}
                      radius="all"
                    />
                  </fieldset>
                </FormGroup>
              </InputsContent>

              <CartContent>
                <Cards
                  focused={creditCardInfo?.focused}
                  cvc={creditCardInfo?.cvc || ''}
                  expiry={creditCardInfo?.expiry || ''}
                  name={creditCardInfo?.name || ''}
                  number={creditCardInfo?.number || ''}
                />
              </CartContent>
            </FormContent>
          </div>
          <SumInfo />
          <Button
            type="submit"
            title="Finalizar Pagamento"
            navigation="/cart/confirmation"
            typeButton="payment"
            isValid={isValid}
          />
        </Content>
      </Form>
    </Container>
  );
}
