import { useContext } from "react"
import { ActionContext } from "../../contexts/ActionContext"

const Summary = () => {
  const { actionElement } = useContext(ActionContext)

  return (
    <>
      <dl className="row">
        <dt className="col-sm-3">Produtos (3 itens)</dt>
        <dd className="col-sm-9">R$ 628,00</dd>

        <dt className="col-sm-3">Frete</dt>
        <dd className="col-sm-9">R$ 5,00</dd>

        <dt className="col-sm-3">Desconto</dt>
        <dd className="col-sm-9">R$ 30,00</dd>

        <dt className="col-sm-3 text-truncate">Subtotal</dt>
        <dd className="col-sm-9">R$ 600,00</dd>
      </dl>

      {actionElement && actionElement}
    </>
  )
}

export { Summary }
