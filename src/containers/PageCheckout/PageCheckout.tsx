import { FC } from "react"
import { useNavigate, useParams } from "react-router-dom"

import CheckoutCart from "../../components/Checkout/CheckoutCart";
import CheckoutPayment from "../../components/Checkout/CheckoutPayment";
import CheckoutConfirm from "../../components/Checkout/CheckoutConfirm";

import { Tabs } from "../../shared"

export interface PageCheckoutProps {
  className?: string;
}

const PageCheckout: FC<PageCheckoutProps> = () => {
  const navigate = useNavigate()
  const params = useParams()

  const tabParams = (value: string) => {
    navigate(`/${value}`);
  }
  
  return (
    <>
      <Tabs active={params.id?.toString()} onChange={tabParams} items={[
        {
          key: 'cart',
          title: 'Sacola',
          children: <CheckoutCart />
        },
        {
          key: 'payment',
          title: 'Pagamento',
          children: <CheckoutPayment />
        },
        {
          key: 'confirm',
          title: 'Confirmação',
          children: <CheckoutConfirm />
        }
      ]} />
    </>
  );
};

export default PageCheckout;
