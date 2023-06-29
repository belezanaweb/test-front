import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import { useCartProvider } from '../contexts/CartContext';
import { Layout } from './Layout';
import { Product } from './Product';
import { CartInformation } from './CartInformation';
import { Button } from './Button';

export function ListProducts() {
  const navigate = useNavigate();
  const { cart } = useCartProvider();

  const handleGoNextStep = useCallback(() => {
    navigate('/payment');
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col bg-white rounded-lg border border-stone-300 py-8 px-2 gap-10">
        {cart?.items.map(item => (
          <Product
            key={item.product.sku}
            image={item.product.imageObjects?.[0].small}
            description={item.product.name}
            price={item.product.priceSpecification?.price}
            discount={item.product.priceSpecification.discount}
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
    </>
  );
}
