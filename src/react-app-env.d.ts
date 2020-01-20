/// <reference types="react-scripts" />

interface Cart {
  id: string
  items?: [CartItem]
  subTotal: Number
  shippingTotal: Number
  discount: Number
  total: Number
}
interface CartItem {
  quantity: Number
  product: Product
}

interface Product {
  sku: string
  name: string
  imageObjects: [ImageObject]
  priceSpecification: Price
}

interface ImageObject {
  featured: Boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extralarge: string
  valid: Boolean
}

interface Price {
  sku: string
  price: Number
  originalPrice: Number
  maxPrice: Number
  percent: Number
  discount: Number
}

interface Inputs {
  creditcard: InputValues
  cardholder: InputValues
  expdate: InputValues
  cvv: InputValues
}

interface InputValues {
  isValid: Boolean
  value: string
}
