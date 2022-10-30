import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICart, IRowCart } from "../@types/cart";
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

const convertToLocalCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export const formatCartData = (cart: IRowCart) => {
  return {
    ...cart,
    subTotal: convertToLocalCurrency(cart.subTotal),
    shippingTotal: convertToLocalCurrency(cart.shippingTotal),
    discount: convertToLocalCurrency(cart.discount),
    total: convertToLocalCurrency(cart.total),
    items:
      cart.items?.map((item) => ({
        ...item,
        product: {
          ...item.product,
          priceSpecification: {
            ...item.product.priceSpecification,
            price: convertToLocalCurrency(
              item.product.priceSpecification.price
            ),
            originalPrice: convertToLocalCurrency(
              item.product.priceSpecification.originalPrice
            ),
            maxPrice: convertToLocalCurrency(
              item.product.priceSpecification.maxPrice
            ),
            percent: convertToLocalCurrency(
              item.product.priceSpecification.percent
            ),
            discount: convertToLocalCurrency(
              item.product.priceSpecification.discount
            ),
          },
        },
      })) || null,
  };
}; // used to get better performance

export const CartProvider = (props: Props) => {
  const [cart, setCart] = useState<ICart>({
    subTotal: "",
    shippingTotal: "",
    discount: "",
    total: "",
    items: null,
  });

  useEffect(() => {
    getCartData().then((res: { data: IRowCart }) =>
      setCart(formatCartData(res.data))
    );
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
