import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICart } from "../@types/cart";
import { getCartData } from "../services/cart";

interface CartContextInterface {
  cart: ICart;
  setCart: Dispatch<SetStateAction<ICart>>;
}

interface Props {
  children: JSX.Element;
}

export const CartContext = createContext<CartContextInterface>({
  cart: {
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0,
    items: null,
  },
  setCart: () => {},
});

export const CartProvider = (props: Props) => {
  const [cart, setCart] = useState<ICart>({
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0,
    items: null,
  });

  useEffect(() => {
    getCartData().then((res) => setCart(res.data));
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  const { cart, setCart } = context;

  return {
    cart,
    setCart,
  };
}
