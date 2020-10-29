interface IProductDataPage {
  discount: number
  id: string
  shippingTotal: number
  subTotal: number
  total: number
}

export interface IPaymentPage {
  productData: IProductDataPage
  handleSubmit: any
}
