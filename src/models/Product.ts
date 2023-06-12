import { ImageObject } from "./ImageObject";
import { PriceSpecification } from "./PriceSpecification";

export interface Product {
  sku: string;
  name: string;
  imageObjects: ImageObject[];
  priceSpecification: PriceSpecification;
}
