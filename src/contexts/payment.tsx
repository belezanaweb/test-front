import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { PaymentFormData  } from '../pages/Payment';
import { useNavigate } from 'react-router-dom';

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

interface PaymentContextData {
  payment: PaymentFormData;
  setPayment: (payment: PaymentFormData) => void;
  resetPayment: () => void;
  data: CartProps | any;
  isLoading: boolean;
}
 export const PaymentContext = createContext<PaymentContextData>({
  
 } as PaymentContextData)

interface PaymentContextProviderProps {
  children: ReactNode;
}

export function PaymentContextProvider({ children }: PaymentContextProviderProps) {
  const navigate = useNavigate()
  const [data, setData] = useState<CartProps>()
const [isLoading, setIsLoading] = useState<boolean>(true);
  const [payment, setPayment] = useState<PaymentFormData>({
    credit_card_number:'',
    name:'',
    cvv:'',
    valid_date:'',
  })


useEffect(()=>{
  setIsLoading(true);
  fetch('https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd')
    .then((response) => response.json())
    .then((data) => {
    let amountItems = 0;
    const  cart = {
      subTotal: data.subTotal,
      shippingTotal: data.shippingTotal,
      discount: data.discount,
      total: data.total,
      items: data.items.map((element: any) => {
        amountItems = amountItems + element.quantity
        return { 
          product: {
            sku: element.product.sku,
            name: element.product.name,
            image: element.product.imageObjects[0].small,
            price: element.product.priceSpecification.price,
            maxPrice: element.product.priceSpecification.maxPrice
          }
        }
      }),
      amountItems: amountItems,
     }
     setIsLoading(false);
     return setData(cart)
    })
},[])

  function resetPayment() {
    setPayment({
      credit_card_number:'',
      name:'',
      cvv:'',
      valid_date:'',
    })
    navigate('/bag')
  }


 

  return <PaymentContext.Provider value={{ data,isLoading, payment, setPayment, resetPayment}}>{children}</PaymentContext.Provider>
}