interface IImages {
  feature: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
  valid: boolean
}

interface IPriceSpec {
  sku: string
  prince: number
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

interface IItens {
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
