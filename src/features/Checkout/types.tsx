export enum CheckoutStep {
  Bag = 'Sacola',
  Payment = 'Pagamento',
  Success = 'Confirmação'
}

export interface PaymentFormValues {
  creditCardNumber: string
  name: string
  expirationDate: string
  cvvCode: string
}

export interface OrderPayload {
  creditCardPayment: PaymentFormValues,
  products: Product[],
}

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

export interface CheckoutData {
  shippingTotal: number,
  subTotal: number,
  discount: number,
  total: number,
  items: Product[]
}
