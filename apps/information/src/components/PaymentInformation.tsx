import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'cart/Button';
import CartInformation from 'cart/CartInformation';
import Layout from 'cart/Layout';
import useCartProvider from 'cart/useCartProvider';

import ListOfProducts from './ListOfProducts';
import SuccessfullyPaymentCard from './SuccessfullyPaymentCard';

export default function PaymentInformation() {
  const navigate = useNavigate();
  const { cart } = useCartProvider();

  const handleGoNextStep = useCallback(() => {
    navigate('/cart');
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col w-full gap-5">
        <SuccessfullyPaymentCard />
        <ListOfProducts />
      </div>

      <Layout.Footer>
        <CartInformation
          productsCount={cart?.items.length ?? 0}
          subtotal={cart?.subTotal ?? 0}
          shipping={cart?.shippingTotal ?? 0}
          discount={cart?.discount ?? 0}
          total={cart?.total ?? 0}
        >
          <Button onClick={handleGoNextStep} color="secondary">
            Voltar ao inicio do protótipo
          </Button>
        </CartInformation>
      </Layout.Footer>
    </>
  );
}
