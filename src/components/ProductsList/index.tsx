import { FC } from 'react'
import { EmptyCart } from 'components/EmptyCart'
import { Card } from '../Card'
import { Product } from '../Product'
import { Loader } from './Loader'

import { CartItem } from 'types/api'

import * as S from './styles'

type Props = {
  title?: string
  showPrice?: boolean
  isLoading?: boolean
  products?: CartItem[]
}

export const ProductsList: FC<Props> = ({
  title,
  showPrice,
  isLoading,
  products
}) => {
  if (isLoading && !products) {
    return <Loader />
  }

  if (!products?.length) {
    return <EmptyCart />
  }

  return (
    <Card title={title}>
      <S.Container>
        {products.map((item) => (
          <Product
            key={item.product.sku}
            product={item.product}
            showPrice={showPrice}
          />
        ))}
      </S.Container>
    </Card>
  )
}
