import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import OrderSummary from "../OrderSummary";


const Confirmation: FC = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div>
      <h2>Compra efetuada com sucesso</h2>
      <OrderSummary text="Voltar ao inicio" onClick={handleClick}/>
    </div>
  )
}

export default Confirmation;
