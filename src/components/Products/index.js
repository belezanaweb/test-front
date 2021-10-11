import React from 'react'
import Card from '../../components/Card'
import ProductItem from '../../components/ProductItem'
import { useSelector } from 'react-redux'

const Products = ({ noPrice }) => {
  const { cartData } = useSelector((state) => state.cart)
  return (
    <Card title="Produtos">
      {cartData?.items &&
        cartData.items.map((item) => (
          <ProductItem
            key={item.product.sku}
            quantity={item.quantity}
            product={item.product}
            noPrice={noPrice}
          />
        ))}
    </Card>
  )
}

export default Products
