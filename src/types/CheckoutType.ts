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
}
