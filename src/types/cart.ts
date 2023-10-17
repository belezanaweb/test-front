import { IItems } from '.'

export interface ICart {
  id: string
  items: IItems[]
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
}
