import { Card } from '../Card'
import { Product } from '../Product'
import { Loader } from './Loader'

import { CartItem } from 'types/api'

import * as S from './styles'
import { FC } from 'react'

type Props = {
  isLoading: boolean
  products?: CartItem[]
}

export const ProductsList: FC<Props> = ({ isLoading, products }) => {
  if (isLoading && !products) {
    return <Loader />
  }

  if (!products) {
    return <div>Sacola vazia</div>
  }

  return (
    <Card>
      <S.Container>
        {products.map((item) => (
          <Product key={item.product.sku} product={item.product} />
        ))}
      </S.Container>
    </Card>
  )
}
