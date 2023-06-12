import { useContext, useEffect } from "react"
import { ActionContext } from "../contexts/ActionContext"

const Payment = () => {
  const { setActionElement } = useContext(ActionContext);

  useEffect(() => {
    setActionElement(<button>Finalizar pedido</button>)
  }, [])

  return <div>payment</div>
}

export { Payment }
