import { format } from "utils"
import _get from 'lodash/get'


/**
 * Represents a Product in Cart Page. Its cannot be reused in others pages.
 * @constructor
 * @param {*} obj - Object containing the response of API
 */
export default class CartProduct {
  constructor(obj) {
    this.sku = obj.sku
    this.name = obj.name
    this.priceFormated = format.currency(obj.priceSpecification.price)
    this.imageUrl = _get(obj, 'imageObjects[0].small', '/no-image.png')
  }
}
