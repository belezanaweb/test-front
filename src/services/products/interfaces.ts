interface ProductItem {
  quantity: number
  product: {
    imageObjects: {
      featured: boolean
      valid: boolean
      thumbnail: string
      small: string
      medium: string
      large: string
      extraLarge: string
    }[]
    name: string
    priceSpecification: {
      discount: number
      maxPrice: number
      originalPrice: number
      percent: number
      price: number
      sku: string
    }
    sku: string
  }
}

export interface Products {
  discount: number
  id: string
  items: ProductItem[]
  shippingTotal: number
  subTotal: number
  total: number
}
