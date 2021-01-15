import React from 'react'
import { useSelector } from 'react-redux'
import { Whitebox, ProductTitle, ProductPrice } from './styles'

function List() {
  const products = useSelector((state) => state.Products.products || [])

  return (
    <Whitebox>
      {products.map((value, index) => (
        <div className="loopProductsbox" key={index}>
          <div className="row">
            <div className="col-3">
              <img src={value.thumb} />
            </div>
            <div className="col-9">
              <ProductTitle>{value.nome}</ProductTitle>
            </div>
            <div className="offset-8 col-4">
              <ProductPrice>{value.preco}</ProductPrice>
            </div>
          </div>
        </div>
      ))}
    </Whitebox>
  )
}
const Products = List
export default Products
