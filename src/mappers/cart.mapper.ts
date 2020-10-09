import { Cart, CartItem, CartResponse } from '../@types/cart';
import { formatPrice } from '../utils/format';
import {
  CartItemResponse,
  CartProductResponse,
} from './../@types/cart/response.d';
import { CartPrices, CartProduct } from './../@types/cart/type.d';
import { Mapper } from './../@types/mapper.d';

class CartMapper implements Mapper<CartResponse, Cart> {
  public format(response: CartResponse): Cart {
    return {
      items: response.items.map(this.formatItem.bind(this)),
      prices: this.formatPrices(response),
    };
  }

  private formatItem(item: CartItemResponse): CartItem {
    const { quantity, product } = item;

    return {
      quantity,
      product: this.formatProduct(product),
    };
  }

  private formatProduct(product: CartProductResponse): CartProduct {
    const { sku, name, imageObjects, priceSpecification } = product;

    return {
      sku,
      name,
      imageUrl: imageObjects[0].medium,
      priceSpecification: {
        price: priceSpecification.price,
        priceFormatted: formatPrice(priceSpecification.price),
      },
    };
  }

  private formatPrices(cart: CartResponse): CartPrices {
    const { discount, shippingTotal, subTotal, total } = cart;

    return {
      discount,
      discountFormatted: formatPrice(discount || 0),
      shippingTotal,
      shippingTotalFormatted: formatPrice(shippingTotal || 0),
      subTotal,
      subTotalFormatted: formatPrice(subTotal),
      total,
      totalFormatted: formatPrice(total),
    };
  }
}

export default CartMapper;
