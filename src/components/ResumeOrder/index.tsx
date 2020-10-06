import { formatToBRL } from 'brazilian-values'
import React from 'react'
import { useSelector } from 'react-redux'
import { IOrder } from '../../model/order'
import { RootState } from '../../redux'
import { ResumeOrderStyled, DFlexExtended } from './styles'

const ResumeOrder: React.FC = () => {
  const order = useSelector<RootState, IOrder | undefined>((state) => {
    return state.orderReducer.order
  })

  return (
    <ResumeOrderStyled>
      {order && (
        <>
          <DFlexExtended justifyContent="space-between">
            <span>Produtos</span>
            <span> {formatToBRL(order.subTotal)}</span>
          </DFlexExtended>
          <DFlexExtended justifyContent="space-between">
            <span>Frete</span>
            <span> {formatToBRL(order.shippingTotal)}</span>
          </DFlexExtended>
          <DFlexExtended justifyContent="space-between" textColor="#FF7800">
            <span>Desconto</span>
            <span>{`- ${formatToBRL(order.discount)}`}</span>
          </DFlexExtended>
          <DFlexExtended justifyContent="space-between" bold>
            <span>Total</span>
            <span> {formatToBRL(order.total)}</span>
          </DFlexExtended>
        </>
      )}
    </ResumeOrderStyled>
  )
}

export default ResumeOrder
