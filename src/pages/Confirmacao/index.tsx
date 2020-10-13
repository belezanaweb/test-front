import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { CartItem } from '../../@types/cart';
import Box from '../../components/Box';
import Title from '../../components/Title';
import Summary from '../../components/Summary';
import { useCheckout } from '../../hooks/checkout';
import {
  Complement,
  Container,
  Content,
  Order,
  Payment,
  PaymentText,
  ProductImage,
  ProductItem,
  ProductName,
  Products,
  Success,
  SuccessIcon,
  SuccessText,
} from './styles';

const Confirmacao: React.FC = () => {
  const { order, destroy } = useCheckout();

  useEffect(() => {
    return () => destroy();
  }, [destroy]);

  if (!order) {
    return <Redirect to="/pagamento" />;
  }

  const {
    cart: { prices, items },
    payment,
  } = order;

  return (
    <Container>
      <Success>
        <SuccessIcon />
        <SuccessText>COMPRA EFETUADA COM SUCESSO</SuccessText>
      </Success>

      <Content>
        <Order>
          <Payment>
            <Title>Pagamento</Title>
            <Box>
              <PaymentText>{payment.numeroCartao}</PaymentText>
              <PaymentText>{payment.nomeTitular}</PaymentText>
              <PaymentText>{payment.validate}</PaymentText>
            </Box>
          </Payment>
          <Products>
            <Title>Produtos</Title>
            <Box>
              {items.map(({ product }: CartItem) => (
                <ProductItem key={product.sku}>
                  <ProductImage src={product.imageUrl} />
                  <ProductName>{product.name}</ProductName>
                </ProductItem>
              ))}
            </Box>
          </Products>
        </Order>

        <Complement>
          <Summary
            subTotal={prices.subTotalFormatted}
            shippingTotal={prices.shippingTotalFormatted}
            discount={prices.discountFormatted}
            total={prices.totalFormatted}
          />
        </Complement>
      </Content>
    </Container>
  );
};

export default Confirmacao;
