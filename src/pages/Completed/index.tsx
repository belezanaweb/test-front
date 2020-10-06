import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ResumeOrder from '../../components/ResumeOrder'
import { IOrder } from '../../model/order'
import { IPayment } from '../../model/payment'
import { RootState } from '../../redux'
import { setDisplay } from '../../redux/ducks/loading'
import { setStep } from '../../redux/ducks/steps'
import { ContainerStyled, ContentStyled } from '../../styles/global'
import { ProdctBagStyled, ProductItemStyled } from './styles'

const Completed: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const order = useSelector<RootState, IOrder | undefined>((state) => {
    return state.orderReducer.order
  })

  const payment = useSelector<RootState, IPayment | undefined>((state) => {
    return state.paymentReducer.payment
  })

  useEffect(() => {
    dispatch(setStep(3))
  }, [dispatch])

  // useEffect(() => {
  //   if (!order) {
  //     dispatch(setDisplay(true))
  //     history.push('/')
  //   }
  // }, [dispatch, history, order])

  return (
    <ContainerStyled>
      <ProdctBagStyled>
        <div>
          <h3>Pagamento</h3>
          <ContentStyled>
            {payment && (
              <>
                <p>{`****.****.****.${payment.cardNumber.substr(15, 19)}`}</p>
                <p>{payment.name}</p>
                <p>{payment.validity}</p>
              </>
            )}
          </ContentStyled>
        </div>
        <div>
          <h3>Produtos</h3>
          <ContentStyled>
            {order &&
              order.items.length > 0 &&
              order.items.map((item) => {
                return (
                  <ProductItemStyled key={item.product.sku}>
                    <img src={item.product.imageObjects[0].small} alt={item.product.name} />
                    <div>{item.product.name.substring(0, 60)}</div>
                  </ProductItemStyled>
                )
              })}
          </ContentStyled>

          <ResumeOrder />
        </div>
      </ProdctBagStyled>
    </ContainerStyled>
  )
}

export default Completed
