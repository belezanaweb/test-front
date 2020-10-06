import React from 'react'
import { useSelector } from 'react-redux'
import { IOrder } from '../../model/order'
import { ProductItemStyled } from '../../pages/ProductBag/styles'
import { RootState } from '../../redux'
import { ContentStyled } from '../../styles/global'

const ProductList: React.FC = () => {
  const order = useSelector<RootState, IOrder | undefined>((state) => {
    return state.orderReducer.order
  })
  return (
    <>
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
    </>
  )
}

export default ProductList
