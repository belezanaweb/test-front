

export interface ICart {
  id?: string;
  items?: ICartItems[];
  subTotal?: number;
  shippingTotal?: number;
  discount?: number;
  total?: number;
}

export interface ICartItems {
  product: {
    sku: string;
    name: string;
    imageObjects: ICartImages[];
    priceSpecification: {
      price: number;
      originalPrice: number;
      maxPrice: number;
      percent: number;
      discount: number;
    }
    quantity: number;
  }
}

export interface ICartImages {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  valid: boolean;
}
