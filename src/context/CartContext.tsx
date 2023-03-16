import { createContext, FC, useEffect, useState } from "react";
import { ICart, ICartItems } from '../components/Cart/Cart.interface';
import api from "../services/api";

interface ICartContext {
  cartItems?: ICart;
}

export const CartContext = createContext<ICartContext>({
  cartItems: {
    items: [],
  }
});

const CartProvider: FC = ({ children }: any) => {

  const [cartItems, setCartItems] = useState<ICart>({items: []});

  useEffect(() => {
    api.get('/d6e9a93f-9741-4494-b81e-637a8e9b8ddd')
      .then(response => {
        setCartItems(response.data)

      })
      .catch(error => console.log(error))
  }, [])

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );

}

export default CartProvider;
