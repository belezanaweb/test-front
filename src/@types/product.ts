import { IPriceSpecification } from "./priceSpecification";

export interface IProduct {
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
