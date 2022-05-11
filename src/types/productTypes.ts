export interface CartDetails {
  id: string
  items: Item[]
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
}

export interface Item {
  quantity: number
  product: Product
}

export interface Product {
  sku: number
  name: string
  imageObjects: Image[]
  priceSpecification: {
    sku: number
    price: number
    originalPrice: number
    maxPrice: number
    percent: number
    discount: number
  }
}

export interface Image {
  featured: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
  valid: boolean
}

export interface Payment {
  creditCard: string
  nameInCard: string
  expirationDate: string
  cvv: string
}
