import { useContext, useEffect } from "react"
import { ActionContext } from "../contexts/ActionContext"
import { SubmitButton } from "../components/styles";

const PaymentPage = () => {
  const { setActionElement } = useContext(ActionContext);

  useEffect(() => {
    setActionElement(<SubmitButton>Finalizar pedido</SubmitButton>)
  }, [])

  return <div>payment</div>
}

export { PaymentPage }
