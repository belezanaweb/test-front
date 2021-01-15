import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { saveProduct, saveTotal } from '../../Actions/Payment/index'
import { Whitebox, ProductTitle, ProductPrice } from './styles'
import { useDispatch } from 'react-redux'
import Helpers from '../../Helpers/Helpers'
function List() {
  const dispatch = useDispatch()
  const helpers = new Helpers()
  const products = useSelector((state) => state.Products.products || [])
  useEffect(() => {
    if (products.length === 0) {
      helpers
        .api()
        .get('/5b15c4923100004a006f3c07')
        .then((res) => {
          var data = res.data.items
          var precoTotal = 0
          var desconto = 0
          var total = 0
          var frete = 5.3
          data.map((el, index) => {
            data[index].thumb = el.product.imageObjects[0].thumbnail
            data[index].nome = el.product.name
            data[index].preco = helpers.formatPrice(el.product.priceSpecification.price)
            data[index].desconto = el.product.priceSpecification.discount
            precoTotal = precoTotal + el.product.priceSpecification.price
            desconto = desconto + el.product.priceSpecification.discount
            total = precoTotal + frete - desconto
          }, [])
          dispatch(saveProduct(data))
          dispatch(
            saveTotal({
              precototal: precoTotal,
              frete: frete,
              desconto: desconto,
              total: total
            })
          )
        })
    }
  }, [])
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
