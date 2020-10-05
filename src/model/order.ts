export interface IOrder {
  id: string
  items: [
    {
      quantity: number
      product: {
        name: string
        imageObjects: [
          {
            thumbnail: string
          }
        ]
        priceSpecification: {
          price: number
          originalPrice: number
          maxPrice: number
          percent: number
          discount: number
        }
      }
    }
  ]
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
}
