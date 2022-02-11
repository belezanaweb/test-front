import React from 'react';
import { Link } from 'react-router-dom';

import { CartItem } from '../../interfaces/Cart';
import formatCurrency from '../../helpers/formatCurrency';

import { Container, ItemTitle, ProductListContent } from './styles';

interface ItemsListProps {
  cartItems: CartItem[];
}

export default function ItemsList({ cartItems }: ItemsListProps) {
  return (
    <Container>
      <h2>Produtos</h2>

      <ProductListContent>
        {cartItems?.map((item: CartItem) => (
          <Link to={`/cart/${item.product.sku}`} key={item.product.sku}>
            <img src={item.product.imageObjects[0].small} />
            <ItemTitle>
              {item.product.name}
              <span>{formatCurrency(item.product.priceSpecification.price)}</span>
            </ItemTitle>
          </Link>
        ))}
      </ProductListContent>
    </Container>
  );
}
