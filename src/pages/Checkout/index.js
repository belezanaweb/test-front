import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../../components/Spinner';
import Total from '../../components/Total';
import { Container } from './styles';
import { fetchProductRequest } from '../../store/modules/product/actions';
import { formatPrice, productsStorageName } from '../../utils';

function Checkout() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    async function getProducts() {
      await dispatch(fetchProductRequest());
    }

    getProducts();
  }, [dispatch]);

  useEffect(() => {
    if (product.items) {
      localStorage.setItem(productsStorageName, JSON.stringify(product));
    }
  }, [product, product.items]);

  return (
    <Container data-testid="checkout">
      {!product.isLoading && product.items &&
        <>
          <h4>Produtos</h4>

          <ul className="product-list">
            {product.items.map(item => (
              <li key={item.product.sku} className="product">
                <img src={item.product.imageObjects[0].small} alt={item.product.name} />

                <div>
                  <h6>{item.product.name}</h6>

                  <b>{formatPrice(item.product.priceSpecification.price)}</b>
                </div>
              </li>
            ))}
          </ul>

          <Total {...product} />

          <Link to="/payment"className="btn">Seguir para o pagamento</Link>
        </>
      }

      {product.isLoading && <Spinner />}
    </Container>
  );
}

export default Checkout;
