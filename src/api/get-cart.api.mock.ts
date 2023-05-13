import { ICartImageModel, ICartItemModel, ICartModel, ICartPriceModel } from "../types/cart.types";

export const mockCartData: ICartModel = {
  id: "5b15c171e4b0023bb624f616",
  items: [{
    quantity: 1,
    product: {
      sku: "24410",
      name: "L'Oréal Professionnel",
      imageObjects: [{
        featured: true,
        thumbnail: "test.png",
        small: "test.png",
        medium: "test.png",
        large: "test.png",
        extraLarge: "test.png",
        valid: true
      }] as ICartImageModel[],
      priceSpecification: {
        sku: "24410",
        price: 225.9,
        originalPrice: 225.9,
        maxPrice: 243.9,
        percent: 7,
        discount: 18
      } as ICartPriceModel,
    }
  }] as ICartItemModel[],
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 600.1
};