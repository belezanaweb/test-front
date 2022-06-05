type Nav = {
  id: number
  name: string
  active: boolean
}

type ImageTypes = {
  extraLarge: string
  large: string
  medium: string
  small: string
  thumbnail: string
}

type ProductSpecification = {
  name: string
  imageObjects: ImageTypes[]
  priceSpecification: { price: number }
}

type ProductItem = {
  product: ProductSpecification
  quantity: number
}

export type Product = {
  id: string
  items: ProductItem[]
  discount: number
  shippingTotal: number
  subTotal: number
  total: number
}

export type CheckoutType = {
  navigation: Nav[]
  setNavigation: React.Dispatch<React.SetStateAction<Nav[]>>
  productData: Product
  setProductData: React.Dispatch<React.SetStateAction<Product>>
  paymentValid: boolean
  setPaymentValid: React.Dispatch<React.SetStateAction<boolean>>
  creditCard: string
  setCreditCard: React.Dispatch<React.SetStateAction<string>>
  cvv: string
  setCvv: React.Dispatch<React.SetStateAction<string>>
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  date: string
  setDate: React.Dispatch<React.SetStateAction<string>>
}
