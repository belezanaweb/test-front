import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Card,
  Heading,
  Layout,
  ProductList,
  ProductListItem,
  Total,
} from '../components';
import { useCart } from '../enhancers';

const Cart: React.FC = (props) => {
  const { data } = useCart();

  function renderProducts() {
    return data?.items?.map(({ product }) => (
      <ProductListItem key={product.sku} data={product} />
    ));
  }

  return (
    <Layout>
      <Heading>Produtos</Heading>
      <Card>
        <ProductList>
          {renderProducts()}
        </ProductList>
      </Card>
      <Total data={data} />
      <Link to="/payment">
        <Button fluid type="button">Seguir Para o Pagamento</Button>
      </Link>
    </Layout>
  )
};

export default Cart;
