import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { IProductProps } from './product.interface'
import { ProductStyled } from './product.style'

export const ProductSkeleton: FC<Pick<IProductProps, 'size'>> = ({ size = 'default' }) => {
  return (
    <ProductStyled size={size}>
      <Skeleton
        height={size === 'small' ? 50 : 65}
        width={size === 'small' ? 50 : 65} />
      <h3>
        <Skeleton count={3} />
      </h3>
      {size !== 'small' && (
        <p>
          <Skeleton height={14} width={50} />
        </p>
      )}
    </ProductStyled>
  )
}
