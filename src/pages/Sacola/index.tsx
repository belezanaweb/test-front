import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Cart, CartItem } from '../../@types/cart';
import Box from '../../components/Box';
import Loading from '../../components/Loading';
import Summary from '../../components/Summary';
import Title from '../../components/Title';
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
        <Title>Produtos</Title>
        <Box>
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
        </Box>
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

  const renderLoading = () => <Loading>Loading...</Loading>;

  return <Container>{cart ? renderContent(cart) : renderLoading()}</Container>;
};

export default Sacola;
