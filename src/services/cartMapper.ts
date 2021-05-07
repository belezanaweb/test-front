import { Cart } from "contexts/Cart";
import { CartResponseProps } from "../containers/CartProvider";

export const cartMapper = (apiResponseData: CartResponseProps): Cart => {
  return {
    discount: apiResponseData.discount,
    items: apiResponseData.items.map((prod) => ({
      sku: prod.product.sku,
      title: prod.product.name,
      price: prod.product.priceSpecification.originalPrice,
      image: prod.product.imageObjects[0],
    })),
    shippingTotal: apiResponseData.shippingTotal,
    subTotal: apiResponseData.subTotal,
    total: apiResponseData.total,
  };
};
