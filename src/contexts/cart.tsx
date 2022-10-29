import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartContextInterfaceObject {
  id?: string;
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
  items: IItem[] | null;
}

interface IProduct {
  sku: number;
  name: string;
  imageObjects: IImageObject[];
  priceSpecification: IPriceSpecification;
}

interface IImageObject {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  valid: true;
}

interface IPriceSpecification {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
}

interface IItem {
  quantity: number;
  product: IProduct;
}
interface CartContextInterface {
  cart: CartContextInterfaceObject | null;
  setCart: Dispatch<SetStateAction<CartContextInterfaceObject>>;
}

interface Props {
  children: JSX.Element;
}

export const CartContext = createContext<CartContextInterface>({
  cart: null,
  setCart: () => {},
});

export const CartUserProvider = (props: Props) => {
  const [cart, setCart] = useState<CartContextInterfaceObject>({
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0,
    items: null,
  });

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data && data !== "undefined") {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (cart?.id) localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
export type { CartContextInterfaceObject };
