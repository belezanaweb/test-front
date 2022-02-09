import React from 'react';
import { Link } from 'react-router-dom';

import { Cart, CartItem } from '../../interfaces/Cart';
import formatCurrency from '../../helpers/formatCurrency';

import { Container, ItemTitle, ProductListContent } from './styles';

interface ItemsListProps {
  cart: Cart;
}

export default function ItemsList({ cart }: ItemsListProps) {
  return (
    <ProductListContent>
      <h2>Produtos</h2>
      <Container>
        {cart?.items?.map((item: CartItem) => (
          <Link to={`/cart/${item.product.sku}`} key={item.product.sku}>
            <img src={item.product.imageObjects[0].small} />
            <ItemTitle>
              {item.product.name}
              <span>{formatCurrency(item.product.priceSpecification.price)}</span>
            </ItemTitle>
          </Link>
        ))}
      </Container>
    </ProductListContent>
  );
}
