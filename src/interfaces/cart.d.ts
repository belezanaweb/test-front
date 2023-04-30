interface ImageObject {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  valid: boolean;
}

interface PriceSpecification {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
}

interface Product {
  sku: string;
  name: string;
  imageObjects: ImageObject[];
  priceSpecification: PriceSpecification;
}

interface CartItem {
  quantity: number;
  product: Product;
}

interface Cart {
  id: string | null;
  items: CartItem[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}
