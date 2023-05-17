import { FC } from "react"
import { useNavigate, useParams } from "react-router-dom"

import CheckoutCart from "../../components/Checkout/CheckoutCart";
import CheckoutPayment from "../../components/Checkout/CheckoutPayment";
import CheckoutConfirm from "../../components/Checkout/CheckoutConfirm";

import BagIcon from '../../assets/images/masks/bag-mask.svg'
import CardMask from '../../assets/images/masks/card-mask.svg'
import CheckIcon from '../../assets/images/masks/check-mask.svg'

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
          icon: BagIcon,
          children: <CheckoutCart />
        },
        {
          key: 'payment',
          title: 'Pagamento',
          icon: CardMask,
          children: <CheckoutPayment />
        },
        {
          key: 'confirm',
          title: 'Confirmação',
          icon: CheckIcon,
          children: <CheckoutConfirm />
        }
      ]} />
    </>
  );
};

export default PageCheckout;
