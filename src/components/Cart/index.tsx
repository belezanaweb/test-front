import { FC } from "react";
import { Link } from "react-router-dom";
import { ICart } from "./Cart.interface";


const Cart: FC<ICart> = ({ navigation }) => {
  return (
    <>
      <h1>Cart</h1>
      <Link to="/payment">Para o pagamento</Link>
    </>
  )
}

export default Cart;
