import { FC } from 'react'
import { EmptyCart } from 'components/EmptyCart'
import { Card } from '../Card'
import { Product } from '../Product'
import { Loader } from './Loader'

import { CartItem } from 'types/api'

import * as S from './styles'

type Props = {
  isLoading: boolean
  products?: CartItem[]
}

export const ProductsList: FC<Props> = ({ isLoading, products }) => {
  if (isLoading && !products) {
    return <Loader />
  }

  if (!products?.length) {
    return <EmptyCart />
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
