import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaRegCheckCircle } from 'react-icons/fa'
import ResumeOrder from '../../components/ResumeOrder'
import { IOrder } from '../../model/order'
import { IPayment } from '../../model/payment'
import { RootState } from '../../redux'
import { setDisplay } from '../../redux/ducks/loading'
import { setStep } from '../../redux/ducks/steps'
import { ContainerStyled, ContentStyled, TextColorStyled } from '../../styles/global'
import { ProdctBagStyled } from '../ProductBag/styles'
import { CompletedStyled } from './styles'
import ProductList from '../../components/ProductList'

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

  useEffect(() => {
    if (!order) {
      dispatch(setDisplay(true))
      history.push('/')
    }
  }, [dispatch, history, order])

  return (
    <ContainerStyled>
      <ProdctBagStyled>
        <div>
          <CompletedStyled>
            <FaRegCheckCircle color="#FF7800" size="40px" />
            <h3>
              <TextColorStyled color="#FF7800">COMPRA EFETUADA COM SUCESSO</TextColorStyled>
            </h3>
          </CompletedStyled>
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
          <ProductList />

          <ResumeOrder />
        </div>
      </ProdctBagStyled>
    </ContainerStyled>
  )
}

export default Completed
