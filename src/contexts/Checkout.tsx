import { ReactNode, createContext, useEffect, useState } from 'react'

import { PaymentFormData  } from '../pages/Payment';
import { useNavigate } from 'react-router-dom';
import { checkoutService } from '../services/checkout.service';

interface Product {
  name: string;
  image: string;
  sku: string;
  price: number;
  maxPrice: number;
}

interface Item {
 product: Product;
  quantity: number;
}

interface CartProps{
  subTotal: number,
  shippingTotal: number,
  discount: number,
  total: number,
  amountItems: number,
  items: Item[]
}

interface CheckoutContextData {
  payment: PaymentFormData;
  setPayment: (payment: PaymentFormData) => void;
  resetPayment: () => void;
  data: CartProps | any;
  isLoading: boolean;
}
 export const CheckoutContext = createContext<CheckoutContextData>({
  
 } as CheckoutContextData)

interface CheckoutContextProviderProps {
  children: ReactNode;
}

export function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
  const navigate = useNavigate()

  const [data, setData] = useState<CartProps>()

  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const [payment, setPayment] = useState<PaymentFormData>({
    creditCardNumber:'',
    name:'',
    cvv:'',
    expirationDate:'',
  })

useEffect(()=>{
  setIsLoading(true);

  async function checkout(){
    const data = await checkoutService();
    
    setIsLoading(false);

    setData(data)
   }

   checkout();
  
},[])

  function resetPayment() {
    setPayment({
      creditCardNumber:'',
      name:'',
      cvv:'',
      expirationDate:'',
    })
    navigate('/bag')
  }


 

  return <CheckoutContext.Provider value={{ data, isLoading, payment, setPayment, resetPayment}}>{children}</CheckoutContext.Provider>
}