import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import ProductList from '../../components/ProductList'
import ResumeOrder from '../../components/ResumeOrder'
import { IOrder } from '../../model/order'
import { RootState } from '../../redux'
import { setDisplay } from '../../redux/ducks/loading'
import { fetchOrder } from '../../redux/ducks/order'
import { setStep } from '../../redux/ducks/steps'
import { ContainerStyled } from '../../styles/global'
import { ProdctBagStyled } from './styles'

const ProductBag: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const order = useSelector<RootState, IOrder | undefined>((state) => {
    return state.orderReducer.order
  })

  useEffect(() => {
    dispatch(setDisplay(true))
    dispatch(setStep(1))
    dispatch(fetchOrder())
  }, [dispatch])

  useEffect(() => {
    if (order) dispatch(setDisplay(false))
  }, [dispatch, order])
  return (
    <ContainerStyled>
      <ProdctBagStyled>
        <div>
          <ProductList />
        </div>
        <div>
          <ResumeOrder />
          <Button
            type="primary"
            text="SEGUIR PARA O PAGAMENTO"
            onClick={() => history.push('/payment')}
          />
        </div>
      </ProdctBagStyled>
    </ContainerStyled>
  )
}

export default ProductBag
