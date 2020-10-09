import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Cart, CartItem } from '../../@types/cart';
import { useCart } from '../../hooks/cart';
import {
  Complement,
  Container,
  Content,
  ProductImage,
  ProductInfo,
  ProductItem,
  ProductName,
  Products,
  ProductValue,
  Summary,
  SummaryItem,
  Title,
  Button,
} from './styles';

const Sacola: React.FC = () => {
  const { cart, load: loadCart } = useCart();
  const history = useHistory();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const handleGoToPagamento = useCallback(() => {
    history.push('/pagamento');
  }, [history]);

  const renderContent = (cart: Cart) => (
    <Content>
      <Products>
        {cart.items.map(({ product }: CartItem) => (
          <ProductItem key={product.sku}>
            <ProductImage src={product.imageUrl} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductValue>
                {product.priceSpecification.priceFormatted}
              </ProductValue>
            </ProductInfo>
          </ProductItem>
        ))}
      </Products>

      <Complement>
        <Summary>
          <SummaryItem>
            Produtos
            <span>{cart.prices.subTotalFormatted}</span>
          </SummaryItem>
          {cart.prices.shippingTotal && (
            <SummaryItem>
              Frete
              <span>{cart.prices.shippingTotalFormatted}</span>
            </SummaryItem>
          )}
          {cart.prices.discount && (
            <SummaryItem highlight>
              Desconto
              <span>{cart.prices.discountFormatted}</span>
            </SummaryItem>
          )}
          <SummaryItem bolder>
            Total
            <span>{cart.prices.totalFormatted}</span>
          </SummaryItem>
        </Summary>

        <Button onClick={handleGoToPagamento}>Seguir para o pagamento</Button>
      </Complement>
    </Content>
  );

  const renderLoading = () => <p>Loading...</p>;

  return (
    <Container>
      <Title>Produtos</Title>
      {cart ? renderContent(cart) : renderLoading()}
    </Container>
  );
};

export default Sacola;
