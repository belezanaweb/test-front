import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

import { Product, CartItem } from '../../interfaces/Cart';

export default function Item() {
  const { cart } = useSelector((state: RootStateOrAny) => state.cart);
  const [product, setProduct] = useState<Product>();

  const params = useParams();

  function getProduct(productSku: string | undefined) {
    const item = cart?.items?.find((item: CartItem) => item.product.sku === productSku);
    if (item) setProduct(item.product);
  }

  useEffect(() => {
    getProduct(params.productSku);
  }, []);

  useEffect(() => {
    getProduct(params.productSku);
  }, [params.productSku]);

  return (
    <>
      {product && (
        <main style={{ padding: '1rem' }}>
          <h2>{product.name}</h2>
          <p>Preço {product.priceSpecification.price}</p>
        </main>
      )}
    </>
  );
}
