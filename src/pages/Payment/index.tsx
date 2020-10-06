import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import ResumeOrder from '../../components/ResumeOrder'
import { IOrder } from '../../model/order'
import { RootState } from '../../redux'
import { setDisplay } from '../../redux/ducks/loading'
import { ContainerStyled, ContentStyled } from '../../styles/global'
import { PaymentStyled } from './styles'

const Payment: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const order = useSelector<RootState, IOrder | undefined>((state) => {
    return state.orderReducer.order
  })

  useEffect(() => {
    if (!order) {
      dispatch(setDisplay(true))
      history.push('/')
    }
  }, [dispatch, order])
  return (
    <ContainerStyled>
      <PaymentStyled>
        <div>
          <h3>Cartão de crédito</h3>
          <ContentStyled>aaa</ContentStyled>
        </div>
        <div>
          <ResumeOrder />
          <Button type="primary" text="Finalizar compra" onClick={() => undefined} />
        </div>
      </PaymentStyled>
    </ContainerStyled>
  )
}

export default Payment
