import { ICartImageViewModel, ICartItemViewModel, ICartPriceViewModel, ICartViewModel } from "../../types/cart.types";

export const mockCartData: ICartViewModel = {
  items: [{
    quantity: 4,
    product: {
      sku: "24410",
      name: "L'Oréal Professionnel 1",
      imageObjects: [{
        thumbnail: "test.png",
        small: "test.png",
        valid: true
      }] as ICartImageViewModel[],
      priceSpecification: {
        sku: "24410",
        price: 39.9,
        originalPrice: 225.9,
        maxPrice: 243.9,
        percent: 7,
        discount: 18
      } as ICartPriceViewModel,
    }
  },
  {
    quantity: 1,
    product: {
      sku: "24410",
      name: "L'Oréal Professionnel 2",
      imageObjects: [{
        thumbnail: "test.png",
        small: "test.png",
        valid: true
      }] as ICartImageViewModel[],
      priceSpecification: {
        sku: "24410",
        price: 20.9,
        originalPrice: 225.9,
        maxPrice: 243.9,
        percent: 7,
        discount: 0
      } as ICartPriceViewModel,
    }
  },
  {
    quantity: 2,
    product: {
      sku: "24410",
      name: "L'Oréal Professionnel 3",
      imageObjects: [{
        thumbnail: "test.png",
        small: "test.png",
        valid: true
      }] as ICartImageViewModel[],
      priceSpecification: {
        sku: "24410",
        price: 10.9,
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