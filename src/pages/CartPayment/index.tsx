import React, { useRef, useCallback, useState, useEffect } from 'react';
import * as Yup from 'yup';
import Cards, { Focused } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useNavigate } from 'react-router';

import getValidationError from '../../helpers/validations';
import {
  cleanLocalStorage,
  getFromLocalStorage,
  setToLocalStorage
} from '../../helpers/local-storage';
import { BELEZA_NA_WEB_CREDIT_CARD } from '../../constants/local-storage';
import { creditCardMask, titularNameMask, dateMask, cvvMask } from '../../helpers/masks';

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
import { nullableTypeAnnotation } from '@babel/types';

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
        number: Yup.string()
          .required('Digite o número do cartão')
          .min(19, 'Número do cartão deve ter pelo menos 16 dígitos'),
        name: Yup.string()
          .required('Digite o nome do titular')
          .min(3, 'Nome deve ter pelo menos 3 letras'),
        expiry: Yup.string()
          .required('Digite a validade do cartão')
          .min(7, 'Data deve ter pelo menos 4 dígitos'),
        cvc: Yup.string()
          .required('Digite o código do cartão')
          .min(3, 'CVC deve ter pelo menos 3 dígitos')
      });

      await schema.validate(data, { abortEarly: false });

      setIsValid(true);
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
      switch (e.currentTarget.id) {
        case 'number':
          creditCardMask(e);
          break;
        case 'name':
          titularNameMask(e);
          break;
        case 'expiry':
          dateMask(e);
          break;
        case 'cvc':
          cvvMask(e);
          break;
        default:
      }

      setCreditCardInfo({
        ...creditCardInfo,
        [e.currentTarget.id]: e.currentTarget.value
      });
    },
    [creditCardInfo]
  );

  const handleFocus = useCallback(
    (value) => {
      const f: Focused = value;

      setCreditCardInfo({
        ...creditCardInfo,
        focused: f
      });
    },
    [creditCardInfo]
  );

  const handleSubmit = useCallback(async (data: any) => {
    const formIsValid = await validForm();

    if (formIsValid) {
      setCreditCardInfo(data);

      const maskData = {
        ...data,
        cvc: '###'
      };

      setToLocalStorage(BELEZA_NA_WEB_CREDIT_CARD, maskData);
    }
  }, []);

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
                    defaultValue={creditCardInfo?.number}
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
                    defaultValue={creditCardInfo?.name}
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
                      defaultValue={creditCardInfo?.expiry}
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
                      defaultValue={creditCardInfo?.cvc}
                      onChange={handleChange}
                      onFocus={(e) => handleFocus(e.target.name)}
                      radius="all"
                    />
                  </fieldset>
                </FormGroup>
              </InputsContent>

              <CartContent>
                <Cards
                  focused={creditCardInfo?.focused || ''}
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
