import { useContext } from 'react'
import { ActionContext } from '../../contexts/ActionContext'
import * as Styled from './styles'

const Summary = () => {
  const { actionElement, summary } = useContext(ActionContext)

  return (
    <>
      <Styled.Summary>
        <dt>Produtos: ({summary?.quantity} itens)</dt>
        <dd>R$ {summary?.subTotal}</dd>

        <dt>Frete:</dt>
        <dd>R$ {summary?.shippingTotal}</dd>

        <dt>Desconto:</dt>
        <dd className="colored">R$ {summary?.discount}</dd>

        <dt className="highlight">Subtotal</dt>
        <dd className="highlight">R$ {summary?.total}</dd>
      </Styled.Summary>

      {actionElement && actionElement}
    </>
  )
}

export { Summary }
