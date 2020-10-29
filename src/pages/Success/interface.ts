import { IItens } from '../../redux/ducks/cart/interface'
import { ICreditCard } from '../../redux/ducks/creditCard/interface'

interface IProductDataPage {
  discount: number
  id: string
  shippingTotal: number
  subTotal: number
  total: number
}

export interface ISuccessPage {
  productItems: IItens[]
  productData: IProductDataPage
  cardData: ICreditCard
}
