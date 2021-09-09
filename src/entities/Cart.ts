// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IItem } from './Item'

export interface ICart {
  id: string
  items: IItem[]
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
}
