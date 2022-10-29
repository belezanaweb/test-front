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
    subTotal: "",
    shippingTotal: "",
    discount: "",
    total: "",
    items: null,
  },
  setCart: () => {},
});

export const CartProvider = (props: Props) => {
  const [cart, setCart] = useState<ICart>({
    subTotal: "",
    shippingTotal: "",
    discount: "",
    total: "",
    items: null,
  });

  useEffect(() => {
    getCartData().then((res: { data: ICart }) => setCart(res.data));
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
