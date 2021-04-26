import React, { useEffect, useState } from 'react';

import Product from './Product';
import Container from './Container';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('belezanawebCartProducts');
    if (data !== null) {
      const { items, ...total } = JSON.parse(data);
      setProducts(items);
    }
  }, []);

  return (
    <>
      <Container title="produtos">
        {products?.length ? (
          products.map((product) => (
            <Product key={product.product.sku} showPrice={props.showPrice} data={product} />
          ))
        ) : (
          <h1>Carrinho vazio.</h1>
        )}
      </Container>
    </>
  );
};

export default ProductList;
