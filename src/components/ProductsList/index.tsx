import React from 'react'
import { ListWrapper } from './style'
import Text from '../Text'
import Product, { productProps } from './Product'
import { moneyConvert } from '../../utils/priceUtils'

export type productsListProps = {
  products: productProps[]
}

const ProductsList = ({ products }: productsListProps) => {
  return (
    <ListWrapper>
      {products.map(({ name, image, originalPrice, price }) => (
        <Product key={name} name={name} image={image} originalPrice={originalPrice} price={price} />
      ))}
    </ListWrapper>
  )
}

export default ProductsList
