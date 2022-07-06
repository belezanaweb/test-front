interface ImageObject {
  small: string;
  thumbnail: string;
}

interface PriceSpecification {
  price: number;
}

interface Product {
  sku: string;
  name: string;
  imageObjects: ImageObject[];
  priceSpecification: PriceSpecification;
}

interface ProductBagItem {
  product: Product;
}

interface ProductBag {
  items: ProductBagItem[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}
