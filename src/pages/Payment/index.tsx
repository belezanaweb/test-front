import React, { useRef, useCallback, useState, useContext } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useNavigate } from 'react-router';

import getValidationError from '../../helpers/validations';
import {
  CARD_NUMBER_PLACEHOLDER,
  CVV_PLACEHOLDER,
  DATE_PLACEHOLDER,
  TITULAR_NAME_PLACEHOLDER
} from '../../constants/placeholder';

import Button from '../../components/Button';
import Input from '../../components/Input';
import SumInfo from '../../components/SumInfo';

import { Container, FormContent, FormGroup } from './styles';
import { StorageContext } from '../../contexts/StorageContext';
import { useDispatch } from 'react-redux';
import { setCreditCardInfo } from '../../store/modules/cart/actions';

interface PaymentInfo {
  cardNumber: string;
  titularName: string;
  validate: string;
  cardCode: string;
}

export default function Payment() {
  const formRef = useRef<FormHandles>(null);
  const { cartItems } = useContext(StorageContext);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({} as PaymentInfo);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validForm = async () => {
    try {
      const data = formRef?.current?.getData();

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        cardNumber: Yup.string().required('Digite o número do cartão'),
        titularName: Yup.string().required('Digite o nome do titular'),
        validate: Yup.string().required('Digite a validade do cartão'),
        cardCode: Yup.string().required('Digite o código do cartão')
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

  const handleSubmit = useCallback(async (data: any) => {
    const formIsValid = await validForm();

    if (formIsValid) {
      dispatch(setCreditCardInfo(data));
      navigate('/confirmation', { replace: true });
    }
  }, []);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPaymentInfo({
        ...paymentInfo,
        [e.currentTarget.name]: e.currentTarget.value
      });
    },
    [paymentInfo]
  );

  return (
    <Container>
      <h2>CARTÃO DE CRÉDTIO</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormContent>
          <fieldset>
            <label htmlFor="cardNumber">Número do cartão:</label>
            <Input
              name="cardNumber"
              type="text"
              placeholder={CARD_NUMBER_PLACEHOLDER}
              mask="creditCard"
              onChange={handleChange}
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
              onChange={handleChange}
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
                onChange={handleChange}
                radius="all"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="cardCode">CVV:</label>
              <Input
                name="cardCode"
                type="text"
                placeholder={CVV_PLACEHOLDER}
                mask="cvv"
                onChange={handleChange}
                radius="all"
              />
            </fieldset>
          </FormGroup>
        </FormContent>

        {cartItems && <SumInfo cart={cartItems} />}

        <Button type="submit" title="Finalizar Pagamento" />
      </Form>
    </Container>
  );
}
