import React from 'react'

const productContent = (items, cssClassName) => {
  return items.map((item) => (
    <div key={item.product.sku} className={cssClassName}>
      {item.product.name}
    </div>
  ))
}

export default productContent
