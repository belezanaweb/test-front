export interface IImages {
  featured: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
  valid: boolean
}

export interface IPriceSpec {
  sku: string
  price: number
  originalPrice: number
  maxPrice: number
  percent: number
  discount: number
}

interface IProduct {
  sku: string
  name: string
  imageObjects: IImages[]
  priceSpecification: IPriceSpec
}

export interface IItens {
  quantity: number
  product: IProduct
}

export interface ICartData {
  discount: number
  id: string
  items: IItens[]
  shippingTotal: number
  subTotal: number
  total: number
}

export interface ICart {
  data: ICartData
  loading: string
  error: boolean
}
