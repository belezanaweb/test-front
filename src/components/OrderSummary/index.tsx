import { FC, useContext } from "react"
import {CartContext} from "../../context/CartContext";
import Button from "../ui/Button";
import './styles.scss'

const OrderSummary: FC = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <div className="orderSummary">
      <div className="orderSummary__item">
        <span>Produtos:({cartItems?.items?.length})</span>
        <span>{cartItems?.subTotal}</span>
      </div>
      <div className="orderSummary__item">
        <span>Frete:</span>
        <span>{cartItems?.shippingTotal}</span>
      </div>
      <div className="orderSummary__item">
        <span>Desconto:</span>
        <span className="font-primary font-bold">{cartItems?.discount}</span>
      </div>
      <div className="orderSummary__item font-bold">
        <span>Subtotal</span>
        <span>{cartItems?.total}</span>
      </div>
      <Button text="Seguir para o pagamento" />
    </div>
  )
}
export default OrderSummary
