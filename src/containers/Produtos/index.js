import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './style'

const format = (() => {
  const f = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  return (val = '') => f.format(val)
})()

const App = () => {
  const {
    data: { items = [] }
  } = useSelector((e) => e.products)

  return (
    <S.Wrapper>
      {items.map(({ product: { name, sku, imageObjects, priceSpecification } } = {}) => {
        const [img] = imageObjects
        const price = format(priceSpecification.price)
        return (
          <S.Product key={sku}>
            <img alt={name} src={img.small} />
            <S.Details>
              {name}
              <S.Price>{price}</S.Price>
            </S.Details>
          </S.Product>
        )
      })}
    </S.Wrapper>
  )
}

export default App
