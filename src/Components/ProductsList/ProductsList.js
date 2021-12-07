import React, { useContext } from 'react'

import Products from '../Products/Products'
import DataContext from '../../Store/DataContext'
import './ProductsList.css'

const ProductsList = () => {
  const context = useContext(DataContext)
  const list = context.state?.products.items || []
  return (
    <div className="ProductsList">
      {list.map((data) => (
        <Products data={data} key={data.product.sku} />
      ))}
    </div>
  )
}

export default ProductsList
