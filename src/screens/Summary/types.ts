interface IProductData {
  discount: number;
  id: string;
  shippingTotal: number;
  subTotal: number;
  total: number;
}

export interface ISummaryPage {
  cardData: any;
  productData: IProductData;
  products: any[];
}
