interface IProductDataPage {
  discount: number;
  id: string;
  shippingTotal: number;
  subTotal: number;
  total: number;
}

export interface ICartScreen {
  products: any[];
  productData: IProductDataPage;
}
