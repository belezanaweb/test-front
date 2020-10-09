import React, { useEffect } from 'react';
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
} from './styles';

const Sacola: React.FC = () => {
  const { cart, load: loadCart } = useCart();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

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
