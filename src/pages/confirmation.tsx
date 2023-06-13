import { useContext, useEffect } from "react"
import { ActionContext } from "../contexts/ActionContext"
import { LinkButton } from "../components/styles";

const ConfirmationPage = () => {
  const { setActionElement } = useContext(ActionContext);

  useEffect(() => {
    setActionElement(<LinkButton $variant="secondary" to="/">Voltar para o início</LinkButton>)
  }, [])

  return <div>confirmation</div>
}

export { ConfirmationPage }
