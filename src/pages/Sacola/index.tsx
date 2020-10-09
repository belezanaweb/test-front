import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Cart, CartItem } from '../../@types/cart';
import Summary from '../../components/Summary';
import { useCart } from '../../hooks/cart';
import {
  Button,
  Complement,
  Container,
  Content,
  ProductImage,
  ProductInfo,
  ProductItem,
  ProductName,
  Products,
  ProductValue,
  Title,
} from './styles';

const Sacola: React.FC = () => {
  const { cart, load: loadCart } = useCart();
  const history = useHistory();

  useEffect(() => {
    if (!cart) {
      loadCart();
    }
  }, [cart, loadCart]);

  const handleGoToPagamento = useCallback(() => {
    history.push('/pagamento');
  }, [history]);

  const renderContent = ({ items, prices }: Cart) => (
    <Content>
      <Products>
        {items.map(({ product }: CartItem) => (
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
        <Summary
          subTotal={prices.subTotalFormatted}
          shippingTotal={prices.shippingTotalFormatted}
          discount={prices.discountFormatted}
          total={prices.totalFormatted}
        />

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
