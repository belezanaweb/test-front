import { IImageObjects, IPriceSpecification } from '.'

export interface IProduct {
  sku: string
  name: string
  imageObjects: IImageObjects[]
  priceSpecification: IPriceSpecification
}
