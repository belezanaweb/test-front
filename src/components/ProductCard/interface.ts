import { IImages, IPriceSpec } from '../../redux/ducks/cart/interface'

export interface IProductCard {
  name: string
  imageObjects: IImages[]
  priceSpecification?: IPriceSpec
}
