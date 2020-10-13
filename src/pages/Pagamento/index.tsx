import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Cart } from '../../@types/cart';
import Box from '../../components/Box';
import Input from '../../components/Input';
import Summary from '../../components/Summary';
import Title from '../../components/Title';
import { useCart } from '../../hooks/cart';
import { useCheckout } from '../../hooks/checkout';
import { formatErrors } from '../../utils/errors';
import {
  Button,
  Complement,
  Container,
  Content,
  CreditCard,
  InputGroup,
} from './styles';

interface CreditCardData {
  numeroCartao: string;
  nomeTitular: string;
  validate: string;
  cvv: string;
}

const initialData: CreditCardData = {
  numeroCartao: '',
  nomeTitular: '',
  validate: '',
  cvv: '',
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
    .matches(/[0-9]{2}\/?[0-9]{4}/, {
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
  const { finish } = useCheckout();

  const history = useHistory();

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
      setIsDisabled(true);
    }
  }, []);

  const handleSubmit = useCallback(
    async (data: CreditCardData) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        const { numeroCartao, nomeTitular, validate, cvv } = data;

        finish(cart!, {
          numeroCartao,
          nomeTitular,
          validate,
          cvv,
        });

        history.push('/confirmacao');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(formatErrors(error));
          return;
        }

        alert('Errro ao realizar compra, Confira os dados e tente novamente!');
      }
    },
    [cart, finish, history],
  );

  const renderContent = ({ prices }: Cart) => (
    <Content>
      <CreditCard>
        <Title>Cartão de Crédito</Title>
        <Box>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            onChange={handleChange}
            initialData={initialData}>
            <Input
              type="tel"
              name="numeroCartao"
              label="Número do cartão:"
              placeholder="____.____.____.____"
              mask="9999.9999.9999.9999"
            />
            <Input
              type="text"
              name="nomeTitular"
              label="Nome do Titular:"
              placeholder="Como no cartão"
            />
            <InputGroup>
              <Input
                type="tel"
                name="validate"
                label="Validade (mês/ano):"
                placeholder="__/____"
                mask="99/9999"
              />
              <Input
                type="tel"
                name="cvv"
                label="CVV:"
                placeholder="___"
                mask="999"
              />
            </InputGroup>
          </Form>
        </Box>
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

  return <Container>{renderContent(cart)}</Container>;
};

export default Pagamento;
