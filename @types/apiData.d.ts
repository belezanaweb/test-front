type ImageProducts = {
  large: string,
  small: string,
  thumbnail: string
}

type Product = {
  product: {
    imageObjects: [ImageProducts],
    name: string,
    sku: string,
    priceSpecification: {
      discount: number,
      maxPrice: number,
      originalPrice: number,
      percent: number,
      sku: string
    }
  },
  quantity: number
}

export type ApiData = {
  discount: number,
  id: string,
  items: [Product],
  shippingTotal: number,
  subTotal: number,
  total: number
}
