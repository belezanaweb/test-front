/* eslint-disable */
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

declare module 'information/PaymentInformation' {
  export default function PaymentInformation(): JSX.Element;
}

declare module 'cart/Layout' {
  export type FooterProps = {
    children: React.ReactNode;
  };

  function Footer({ children }: FooterProps): React.ReactPortal | null;

  export default function Layout(): React.JSX.Element;

  Layout.Footer = ({ children }: FooterProps) => React.ReactPortal | null;
}

declare module 'cart/Button' {
  type ButtonVariants = {
    color?: 'primary' | 'secondary' | undefined;
  };
  export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
    ButtonVariants & {
      type?: 'button' | 'submit' | 'reset';
      form?: string;
      disabled?: boolean;
    };

  export default function Button({
    className,
    color,
    disabled,
    ...props
  }: ButtonProps): React.JSX.Element;
}

declare module 'cart/CartInformation' {
  export type CartInformationProps = {
    subtotal: number;
    productsCount: number;
    shipping: number;
    discount: number;
    total: number;
    children: React.ReactNode;
  };

  export default function CartInformation({
    subtotal,
    productsCount,
    shipping,
    discount,
    total,
    children,
  }: CartInformationProps): React.JSX.Element;
}

declare module 'cart/Product' {
  export type ProductProps = {
    image: string;
    description: string;
    price: number;
    discount: number;
    maxPrice: number;
    hiddenPrices?: boolean;
  };

  export default function Product({
    image,
    description,
    price,
    discount,
    maxPrice,
    hiddenPrices,
  }: ProductProps): React.JSX.Element;
}
