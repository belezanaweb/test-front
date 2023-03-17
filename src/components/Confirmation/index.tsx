import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummary from "../OrderSummary";
import { formatHideMask } from "../../utils/converters/formatHideNumberCard";
import Cart from "../Cart";
import './styles.scss'

const Confirmation: FC = () => {

  const location = useLocation();
  const formData = location.state?.formData
  const navigate = useNavigate();

  useEffect(() => {
    if (!formData || !formData.cardNumber) {
      navigate("/payment")
    }
  }, [formData, navigate])


  const handleClick = () => {
    navigate("/")
  }

  return (
    <>
      {
        formData &&
        <div className="confirmation">
          <h2>Compra efetuada com sucesso</h2>
          <p>{formatHideMask(formData.cardNumber)}</p>
          <p>{formData.name}</p>
          <p>{formData.cardExpiration}</p>
        </div>
      }
      <Cart />
      <OrderSummary text="Voltar ao inicio" onClick={handleClick} />

    </>
  )
}

export default Confirmation;
