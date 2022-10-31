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
import { convertToLocalCurrency } from "../utils/currencyFormatter";

interface CartContextInterface {
  cart: ICartContext;
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
            percent: item.product.priceSpecification.percent + "%",
            discount: convertToLocalCurrency(
              item.product.priceSpecification.discount
            ),
          },
        },
      })) || null,
  };
}; // used to get better performance

interface ICartContext extends ICart {
  isLoading?: boolean;
}

export const CartProvider = (props: Props) => {
  const [cart, setCart] = useState<ICartContext>({
    subTotal: "",
    shippingTotal: "",
    discount: "",
    total: "",
    items: null,
    isLoading: false,
  });

  useEffect(() => {
    setCart({ ...cart, isLoading: true });
    getCartData().then((res: { data: IRowCart }) =>
      setCart({ ...formatCartData(res.data), isLoading: false })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
