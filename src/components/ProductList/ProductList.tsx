import ContentLoader from 'react-content-loader'

import { useCheckout } from '../../stores'
import { ProductListStyled, ProductListHeading } from './ProductList.styled'

import { ProductCard } from '../ProductCard'
import { ProductListProps } from './ProductList.types'

export const ProductList = ({ title }: ProductListProps) => {
  const { loadingCheckout, checkout } = useCheckout()

  return (
    <ProductListStyled>
      {title && <ProductListHeading>{title}</ProductListHeading>}

      {loadingCheckout &&
        [...Array(3)].map(() => (
          <ContentLoader height={70}>
            <rect x="0" y="0" rx="5" ry="5" width="60" height="60" />
            <rect x="80" y="0" rx="4" ry="4" width="100%" height="8" />
            <rect x="80" y="20" rx="3" ry="3" width="100%" height="8" />
          </ContentLoader>
        ))}

      {checkout?.items.map((item) => (
        <ProductCard key={item.product.sku} {...item.product} />
      ))}
    </ProductListStyled>
  )
}
