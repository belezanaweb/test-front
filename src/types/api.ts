export type Product = {
  sku: string
  name: string
  imageObjects: {
    featured: boolean
    thumbnail: string
    small: string
    medium: string
    large: string
    extraLarge: string
    valid: boolean
  }[]
  priceSpecification: {
    sku: string
    price: number
    originalPrice: number
    maxPrice: number
    percent: number
    discount: number
  }
}

export type CartItem = {
  quantity: number
  product: Product
}

export type Cart = {
  items: CartItem[]
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
}
