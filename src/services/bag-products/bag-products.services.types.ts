export interface BagProductResponse {
  id: string;
  totalWithoutFreight: number;
  discount: number;
  total: number;
  shippingTotal: number;
  items: ProductItem[];
}

export interface ProductItem {
  quantity: number;
  discount: number;
  total: number;
  subTotal: number;
  product: ProductDetail;
}

export interface ProductDetail {
  sku: string;
  name: string;
  imageObjects: ImageObject[];
  slugName: string;
  price: number;
  maxPrice: number;
}

export interface ImageObject {
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}
