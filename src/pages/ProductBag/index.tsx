import { formatToBRL } from 'brazilian-values'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import ResumeOrder from '../../components/ResumeOrder'
import { IOrder } from '../../model/order'
import { RootState } from '../../redux'
import { fetchOrder } from '../../redux/ducks/order'
import { setStep } from '../../redux/ducks/steps'
import { ContainerStyled, ContentStyled } from '../../styles/global'
import { ProdctBagStyled, ProductItemStyled } from './styles'

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
        <div>
          <h3>Produtos</h3>
          <ContentStyled>
            {order &&
              order.items.length > 0 &&
              order.items.map((item) => {
                return (
                  <ProductItemStyled>
                    <img src={item.product.imageObjects[0].small} alt={item.product.name} />
                    <div>
                      {item.product.name.substring(0, 60)}
                      <div className="price">
                        {formatToBRL(item.product.priceSpecification.originalPrice)}
                      </div>
                    </div>
                  </ProductItemStyled>
                )
              })}
          </ContentStyled>
        </div>
        <div>
          <ResumeOrder />
          <Button type="primary" text="SEGUIR PARA O PAGAMENTO" onClick={() => undefined} />
        </div>
      </ProdctBagStyled>
    </ContainerStyled>
  )
}

export default ProductBag
