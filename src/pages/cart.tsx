import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ActionContext } from "../contexts/ActionContext"

const Cart = () => {
  const { setActionElement } = useContext(ActionContext);

  useEffect(() => {
    setActionElement(<Link to="payment">Seguir para o pagamento</Link>)
  }, [])

  return <div>cart</div>
}

export { Cart }
