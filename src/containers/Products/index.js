import React from 'react'
import { useSelector } from 'react-redux'
import formatCurrency from '../../utils/formatCurrency'
import * as S from './style'

const App = ({ condensed }) => {
  const {
    data: { items = [] }
  } = useSelector((e) => e.products)

  return (
    <section>
      <h1>Produtos</h1>
      <S.Container condensed={condensed}>
        {items.map(({ product: { name, sku, imageObjects, priceSpecification } } = {}) => {
          const [img] = imageObjects
          const price = formatCurrency(priceSpecification.price)
          return (
            <S.Product key={sku}>
              <img alt={name} src={img.small} />
              <S.Details>
                {name}
                {!condensed && <S.Price>{price}</S.Price>}
              </S.Details>
            </S.Product>
          )
        })}
      </S.Container>
    </section>
  )
}

export default App
