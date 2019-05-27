import * as React from 'react';
import { CartType } from '../../models/cart.model';

const CartResume: React.FC<{
  cart: CartType,
}> = ({ cart }) => (
  <table>
    <tbody>
      <tr>
        <th>Produtos</th>
        <td>{cart.subTotal}</td>
      </tr>
      <tr>
        <th>Frete</th>
        <td>{cart.shippingTotal}</td>
      </tr>
      <tr>
        <th>Desconto</th>
        <td>- {cart.discount}</td>
      </tr>
      <tr>
        <th>Total</th>
        <td>{cart.total}</td>
      </tr>
    </tbody>
  </table>
)

export default CartResume;
