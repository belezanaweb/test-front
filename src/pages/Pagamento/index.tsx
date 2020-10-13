import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { Cart } from '../../@types/cart';
import Input from '../../components/Input';
import Summary from '../../components/Summary';
import { useCart } from '../../hooks/cart';
import { formatErrors } from '../../utils/errors';
import {
  Button,
  Complement,
  Container,
  Content,
  CreditCard,
  InputGroup,
  Title,
} from './styles';

interface CreditCardData {
  numeroCartao: string;
  nomeTitular: string;
  validate: string;
  cvv: string;
}

const initialData: CreditCardData = {
  numeroCartao: '1234123412341234',
  nomeTitular: 'Alex Tavella',
  validate: '1022',
  cvv: '321',
};

const schema = Yup.object().shape({
  numeroCartao: Yup.string()
    .required('Número do cartão é obrigatório')
    .matches(/[0-9]{4}\.?[0-9]{4}\.?[0-9]{4}\.?[0-9]{4}/, {
      excludeEmptyString: true,
      message: 'Número do cartão está incompleto',
    }),
  nomeTitular: Yup.string()
    .required('Nome do cartão é obrigatório')
    .matches(/(.+\s)+(.+)/, {
      excludeEmptyString: true,
      message: 'Nome do cartão está incompleto',
    }),
  validate: Yup.string()
    .required('Validade é obrigatório')
    .matches(/[0-9]{2}\/?[0-9]{2}/, {
      excludeEmptyString: true,
      message: 'Validade está incompleto',
    }),
  cvv: Yup.string()
    .required('CVV é obrigatório')
    .matches(/[0-9]{3}/, {
      excludeEmptyString: true,
      message: 'CVV está incompleto',
    }),
});

const Pagamento: React.FC = () => {
  const { cart } = useCart();

  const formRef = useRef<FormHandles | null>(null);

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleChange = useCallback(async () => {
    try {
      formRef.current?.setErrors({});

      const numeroCartao = formRef.current?.getFieldValue('numeroCartao');
      const nomeTitular = formRef.current?.getFieldValue('nomeTitular');
      const validate = formRef.current?.getFieldValue('validate');
      const cvv = formRef.current?.getFieldValue('cvv');

      const data: CreditCardData = {
        numeroCartao,
        nomeTitular,
        validate,
        cvv,
      };

      await schema.validate(data, {
        abortEarly: false,
      });

      setIsDisabled(false);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        formRef.current?.setErrors(formatErrors(error));
        return;
      }

      setIsDisabled(true);
    }
  }, []);

  const handleSubmit = useCallback(async (data: CreditCardData) => {
    try {
      formRef.current?.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      // const { numeroCartao, nomeTitular, validate, cvv } = data;
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        formRef.current?.setErrors(formatErrors(error));
        return;
      }

      alert('Errro ao realizar compra, Confira os dados e tente novamente!');
    }
  }, []);

  useEffect(() => {
    handleChange();
  }, [handleChange]);

  const renderContent = ({ prices }: Cart) => (
    <Content>
      <CreditCard>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          onChange={handleChange}
          initialData={initialData}>
          <Input
            name="numeroCartao"
            label="Número do cartão:"
            placeholder="____.____.____.____"
            mask="9999.9999.9999.9999"
          />
          <Input
            name="nomeTitular"
            label="Nome do Titular:"
            placeholder="Como no cartão"
          />
          <InputGroup>
            <Input
              name="validate"
              label="Validade (mês/ano):"
              placeholder="__/__"
              mask="99/99"
            />
            <Input name="cvv" label="CVV:" placeholder="___" mask="999" />
          </InputGroup>
        </Form>
      </CreditCard>

      <Complement>
        <Summary
          subTotal={prices.subTotalFormatted}
          shippingTotal={prices.shippingTotalFormatted}
          discount={prices.discountFormatted}
          total={prices.totalFormatted}
        />

        <Button
          onClick={() => formRef?.current?.submitForm()}
          disabled={isDisabled}>
          Finalizar Pedido
        </Button>
      </Complement>
    </Content>
  );

  if (!cart) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Title>Pagamento</Title>
      {renderContent(cart)}
    </Container>
  );
};

export default Pagamento;
