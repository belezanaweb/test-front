/// <reference types="react" />

declare module 'payment/CreditCardForm' {
  export default function CreditCardForm(): JSX.Element;
}

declare module 'cart/CartProvider' {
  export type CartProviderProps = {
    children: ReactNode;
  };

  export default function CartProvider({
    children,
  }: CartProviderProps): JSX.Element;
}

declare module 'cart/useCartProvider' {
  export type ImageObject = {
    featured: boolean;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
    valid: boolean;
  };

  export type PriceSpecification = {
    sku: string;
    price: number;
    originalPrice: number;
    maxPrice: number;
    percent: number;
    discount: number;
  };

  export type ProductClass = {
    sku: string;
    name: string;
    imageObjects: ImageObject[];
    priceSpecification: PriceSpecification;
  };

  export type Product = {
    quantity: number;
    product: ProductClass;
  };

  export type Cart = {
    id: string;
    items: Product[];
    subTotal: number;
    shippingTotal: number;
    discount: number;
    total: number;
  };

  export type CreditCard = {
    number: string;
    holder: string;
    expireDate: string;
    cvv: string;
  };

  export type CartContextProps = {
    cart?: Cart;
    creditCard?: CreditCard;
    setCreditCard: (creditCard: CreditCard) => void;
  };

  export default function useCartProvider(): CartContextProps;
}
