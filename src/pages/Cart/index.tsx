import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { CartItem } from '../../interfaces/Cart';
import { cartRequest } from '../../store/modules/cart/actions';
import formatCurrency from '../../helpers/formatCurrency';

import Button from '../../components/Button';
import SumInfo from '../../components/SumInfo';

import { Container, ProductListContent, ProductList, Info, CartSum } from './styles';

export default function Cart() {
  const { cart } = useSelector((state: RootStateOrAny) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartRequest());
  }, []);

  return (
    <Container>
      <ProductListContent>
        <h2>Produtos</h2>
        <ProductList>
          {cart?.items?.map((item: CartItem) => (
            <Link to={`/cart/${item.product.sku}`} key={item.product.sku}>
              <img src={item.product.imageObjects[0].small} />
              <Info>
                {item.product.name}
                <span>{formatCurrency(item.product.priceSpecification.price)}</span>
              </Info>
            </Link>
          ))}
        </ProductList>
      </ProductListContent>

      <SumInfo />
      <Button title="Seguir para o pagamento" />
    </Container>
  );
}
