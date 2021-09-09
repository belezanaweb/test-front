export interface IProduct {
  sku: string
  name: string
  imageObjects: IImageProduct[]
  priceSpecification: IPriceSpecification
}

export interface IImageProduct {
  featured: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
  valid: boolean
}

export interface IPriceSpecification {
  sku: string
  price: number
  originalPrice: number
  maxPrice: number
  percent: number
  discount: number
}
