import React, { useContext } from 'react'

import { PurchaseContext } from '../../../contexts/PurchaseContext'

import ProductInfo from '../productInfo/ProductInfo'

import { StyledPurchaseProducts } from './PurchaseProducts.styled'

type PurchaseProductsProps = {
  showPrice?: boolean
}

function PurchaseProducts({ showPrice = true }: PurchaseProductsProps): JSX.Element {
  const { products } = useContext(PurchaseContext)

  return (
    <StyledPurchaseProducts>
      {products.map(({ name, thumbnail, price }, index) => (
        <ProductInfo
          key={index}
          img={thumbnail}
          description={name}
          price={price}
          showPrice={showPrice}
        />
      ))}
    </StyledPurchaseProducts>
  )
}

export default PurchaseProducts
