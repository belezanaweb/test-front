import React, { useRef, useCallback, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import formatCurrency from '../../helpers/formatCurrency';
import getValidationError from '../../helpers/validations';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, ProductListContent, ProductList, CartSum } from './styles';

export default function Payment() {
  const formRef = useRef<FormHandles>(null);
  const [defaultValue, setDefaultValueOrder] = useState('');

  const validForm = async () => {
    try {
      const data = formRef?.current?.getData();

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({ user: Yup.string().required('User obrigatório') });

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

    console.log(data);

    // if (formIsValid) {
    //   navigate(`../dashboard?username=${data.user}&page=1&size=4&type=all`, { replace: true });
    // }
  }, []);

  return (
    <Container>
      <ProductListContent>
        <h2>Produtos</h2>
        <ProductList>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="cardNumber">Número do cartão:</label>
              <Input
                name="cardNumber"
                type="text"
                hasValidation={true}
                placeholder=""
                defaultValue={defaultValue}
                hasBorder={false}
                inputHeight="6rem"
                radius="all"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="titularName">Nome do titular:</label>
              <Input
                name="titularName"
                type="text"
                hasValidation={true}
                placeholder="Como no Cartão"
                defaultValue={defaultValue}
                hasBorder={false}
                inputHeight="6rem"
                radius="all"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="valid">Validade (mês/ano):</label>
              <Input
                name="valid"
                type="text"
                hasValidation={true}
                placeholder=""
                defaultValue={defaultValue}
                hasBorder={false}
                inputHeight="6rem"
                radius="all"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="cardCode">CVV:</label>
              <Input
                name="cardCode"
                type="text"
                hasValidation={true}
                placeholder=""
                defaultValue={defaultValue}
                hasBorder={false}
                inputHeight="6rem"
                radius="all"
              />
            </fieldset>

            <Button type="submit" title="Finalizar Pagamento" />
          </Form>
        </ProductList>
      </ProductListContent>
    </Container>
  );
}
