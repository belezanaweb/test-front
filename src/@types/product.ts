import {
  IPriceSpecification,
  IRawPriceSpecification,
} from "./priceSpecification";

export interface IProduct {
  sku: string;
  name: string;
  imageObjects: IImageObject[];
  priceSpecification: IPriceSpecification;
}

export interface IRawProduct {
  sku: string;
  name: string;
  imageObjects: IImageObject[];
  priceSpecification: IRawPriceSpecification;
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
