export interface IOrder {
  id: string,
  items: IOrderItem[]
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
}

interface IOrderItem {
  quantity: 1
  product: {
    sku: string
    name: string
    imageObjects: IImageObject[]
    priceSpecification: IPriceSpecification
  }
}

interface IImageObject {
  featured: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
  valid: boolean
}

interface IPriceSpecification {
  sku: string
  price: number
  originalPrice: number
  maxPrice: number
  percent: number
  discount: number
}
