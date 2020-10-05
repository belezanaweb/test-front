import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IOrder } from '../../model/order'
import { RootState } from '../../redux'
import { fetchOrder } from '../../redux/ducks/order'
import { setStep } from '../../redux/ducks/steps'
import { ContainerStyled, ContentStyled } from '../../styles/global'
import { ProdctBagStyled } from './styles'

const ProductBag: React.FC = () => {
  const dispatch = useDispatch()

  const order = useSelector<RootState, IOrder | undefined>((state) => {
    return state.orderReducer.order
  })

  useEffect(() => {
    dispatch(setStep(1))
    dispatch(fetchOrder())
  }, [])
  return (
    <ContainerStyled>
      <ProdctBagStyled>
        <h3>Produtos</h3>
        <ContentStyled>
          {order &&
            order.items.length > 0 &&
            order.items.map((item) => {
              return <span> a</span>
            })}
        </ContentStyled>
      </ProdctBagStyled>
    </ContainerStyled>
  )
}

export default ProductBag
