import React, { FC } from 'react'
import { formatMoney } from 'helpers'
import { IProductProps } from './product.interface'
import { ProductStyled } from './product.style'

export const Product: FC<IProductProps> = ({ title, picture, price = 0, size = 'default' }) => {
  return (
    <ProductStyled size={size}>
      <div className="img">
        <img src={picture} />
      </div>
      <h3>{title}</h3>
      {!!price && size !== 'small' && <p>{formatMoney(price)}</p>}
    </ProductStyled>
  )
}
