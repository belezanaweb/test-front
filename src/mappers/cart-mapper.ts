import { Cart, CartItem } from '../interfaces/Cart';

export default function cartMapper(cart: Cart) {
  const itemsWrapper: CartItem[] = cart.items.map((item: CartItem) => {
    return {
      quantity: item.quantity,
      product: {
        sku: item.product.sku,
        name: item.product.name,
        imageObjects: [
          {
            small: item.product.imageObjects[0].small,
            medium: item.product.imageObjects[0].medium
          }
        ],
        priceSpecification: {
          sku: item.product.priceSpecification.sku,
          price: item.product.priceSpecification.price,
          discount: item.product.priceSpecification.discount
        }
      }
    };
  });

  const dataWrapper = {
    id: cart.id,
    shippingTotal: cart.shippingTotal,
    items: itemsWrapper
  };

  return dataWrapper;
}
