export interface PriceSpecification {
  discount: number
  maxPrice: number
  originalPrice:number
  percent: number
  price: number
  sku: string
}

export interface ImageObjects {
  extraLarge: string
  featured: boolean
  large: string
  medium: string
  small: string
  thumbnail: string
  valid: boolean
}

export interface Product {
  quantity: number
  product: { 
    name: string
    sku: string
    priceSpecification: PriceSpecification
    imageObjects: ImageObjects[]
  }
}

export interface Billing {
  shippingTotal: number
  subTotal: number
  discount: number
  total: number
}
