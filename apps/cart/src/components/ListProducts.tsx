import { useNavigate } from 'react-router-dom';
import { Fragment, useCallback } from 'react';

import useCartProvider from 'cart/useCartProvider';
import Layout from 'cart/Layout';
import Product from 'cart/Product';
import CartInformation from 'cart/CartInformation';
import Button from 'cart/Button';

export default function ListProducts() {
  const navigate = useNavigate();
  const { cart } = useCartProvider();

  const handleGoNextStep = useCallback(() => {
    navigate('/payment');
  }, [navigate]);

  return (
    <Fragment>
      <div className="flex flex-col bg-white rounded-lg border border-stone-300 py-8 px-2 gap-10 w-full">
        {cart?.items.map(item => (
          <Product
            key={item.product.sku}
            image={item.product.imageObjects?.[0].small}
            description={item.product.name}
            price={item.product.priceSpecification?.price}
            discount={item.product.priceSpecification.discount}
            maxPrice={item.product.priceSpecification.maxPrice}
          />
        ))}
      </div>

      <Layout.Footer>
        <CartInformation
          productsCount={cart?.items.length ?? 0}
          subtotal={cart?.subTotal ?? 0}
          shipping={cart?.shippingTotal ?? 0}
          discount={cart?.discount ?? 0}
          total={cart?.total ?? 0}
        >
          <Button onClick={handleGoNextStep}>Seguir para o pagamento</Button>
        </CartInformation>
      </Layout.Footer>
    </Fragment>
  );
}
