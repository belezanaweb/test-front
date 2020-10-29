import { IItens } from '../../redux/ducks/cart/interface'

interface IProductDataPage {
  discount: number
  id: string
  shippingTotal: number
  subTotal: number
  total: number
}

export interface ICartPage {
  productItems: IItens[]
  productData: IProductDataPage
}
