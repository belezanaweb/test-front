import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getProducts } from '../../modules/cart/actions'

import ProductCard from '../../../ui/components/ProductCard'

const ProductListContainer = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      {items.map((item) => (
        <ProductCard
          key={item.product.sku}
          name={item.product.name}
          images={item.product.imageObjects}
          priceData={item.product.priceSpecification}
        />
      ))}
    </div>
  )
}

export default ProductListContainer
