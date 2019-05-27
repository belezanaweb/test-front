import { Image } from './image.model';
import { Price } from "./price.model";

export type Product = {
  sku                : string
  name               : string
  imageObjects       : Image[]
  priceSpecification : Price
}
