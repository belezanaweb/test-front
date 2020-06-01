interface Product {
  sku: string;
  name: string;
  imageObjects: {
    feature?: boolean;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
    valid?: boolean;
  }[];
  priceSpecification: {
    sku: string;
    price: number;
    originalPrice: number;
    maxPrice: number;
    percent: number;
    discount: number;
  };
}

export default Product;
