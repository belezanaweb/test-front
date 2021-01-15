import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { saveProduct, saveTotal } from '../../Actions/Payment/index'
import { useDispatch } from 'react-redux'
import Helpers from '../../Helpers/Helpers'
export default function List() {
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
  return null
}
