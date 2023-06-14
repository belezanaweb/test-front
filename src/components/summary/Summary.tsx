import { useContext } from 'react'
import { ActionContext } from '../../contexts/ActionContext'
import * as Styled from './styles'
import { NumberFormat } from '../../helpers/numberFormat'

const Summary = () => {
  const { actionElement, summary } = useContext(ActionContext)

  return (
    <>
      <Styled.Summary>
        <dt>Produtos: ({summary?.quantity} itens)</dt>
        <dd>{NumberFormat(summary?.subTotal ?? 0)}</dd>

        <dt>Frete:</dt>
        <dd>{NumberFormat(summary?.shippingTotal ?? 0)}</dd>

        <dt>Desconto:</dt>
        <dd className="colored">{NumberFormat(summary?.discount ?? 0)}</dd>

        <dt className="highlight">Subtotal</dt>
        <dd className="highlight">{NumberFormat(summary?.total ?? 0)}</dd>
      </Styled.Summary>

      {actionElement && actionElement}
    </>
  )
}

export { Summary }
