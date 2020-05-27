interface Product {
  sku: string;
  name: string;
  imageObjects: {
    feature: true;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
    valid: string;
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
