export interface Product {
  sku: string
  name: string
  imageObjects: ProductImage[]
  priceSpecification: ProductSpecification
}

export interface ProductImage {
  featured: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
  valid: boolean
}

export interface ProductSpecification {
  sku: string
  price: number
  originalPrice: number
  maxPrice: number
  percent: number
  discount: number
}

export interface CartItem {
  quantity: number
  product: Product
}

export interface CartApiResponse {
  id: string
  items: CartItem[]
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
}
