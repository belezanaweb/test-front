import { ICartImageViewModel, ICartItemViewModel, ICartPriceViewModel, ICartViewModel } from "../types/cart.types";

export const mockCartData: ICartViewModel = {
  items: [{
    quantity: 1,
    product: {
      sku: "24410",
      name: "L'Oréal Professionnel",
      imageObjects: [{
        thumbnail: "test.png",
        small: "test.png",
        valid: true
      }] as ICartImageViewModel[],
      priceSpecification: {
        sku: "24410",
        price: 225.9,
        originalPrice: 225.9,
        maxPrice: 243.9,
        percent: 7,
        discount: 18
      } as ICartPriceViewModel,
    }
  }] as ICartItemViewModel[],
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 600.1
};