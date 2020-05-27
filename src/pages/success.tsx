import React from 'react';

import {
  Card,
  CreditCardData,
  Heading,
  Layout,
  Total,
  Feedback,
  ProductList,
  ProductListItem,
} from '../components';
import { useCart, useCreditCard } from '../enhancers';

const Success: React.FC = () => {
  const cart = useCart();
  const creditCard = useCreditCard();

  function renderProducts() {
    return cart.data?.items?.map(({ product }) => (
      <ProductListItem key={product.sku} data={product} />
    ));
  }

  return (
    <Layout>
      <Feedback>
        Compra Efetuada com Sucesso
      </Feedback>
      <Heading>Pagamento</Heading>
      <Card css={{ marginBottom: '8px', width: '100%' }}>
        <CreditCardData {...creditCard.data} />
      </Card>
      <Heading>Produtos</Heading>
      <Card>
        <ProductList size="sm">
          {renderProducts()}
        </ProductList>
      </Card>
      <Total data={cart.data} />
    </Layout>
  )
}

export default Success;
