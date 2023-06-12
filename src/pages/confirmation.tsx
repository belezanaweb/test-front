import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ActionContext } from "../contexts/ActionContext"

const Confirmation = () => {
  const { setActionElement } = useContext(ActionContext);

  useEffect(() => {
    setActionElement(<Link to="/">Voltar para o início</Link>)
  }, [])

  return <div>confirmation</div>
}

export { Confirmation }
