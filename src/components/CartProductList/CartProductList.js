import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { cartService } from 'services'
import CartProduct from './CartProduct.model'
import { handleAsyncReduxData } from 'utils/async.utils'
import { Types } from 'store/duck/cart'
import Loader from 'components/Loader/Loader'
import SadFace from 'components/SadFace/SadFace'
import {
  ProductDetails,
  Product
} from './style'

const CartProductList = ({ showPrice }) => {

  const { data, loading, hasError } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  function init() {
    handleAsyncReduxData(
      cartService.getCart(),
      dispatch,
      {
        loadingActionName: Types.LOADING,
        errorActionName: Types.ERROR,
        successActionName: Types.SUCCESS,
      }
    )
  }

  useEffect(() => {
    init()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (hasError) {
    return <SadFace retryPromise={init} />
  }

  return (
    data.items.map(entry => {
      const product = new CartProduct(entry.product)
      return (
        <Product key={product.sku}>
          <img alt={product.name} src={product.imageUrl} />
          <ProductDetails>
            <p>{product.name}</p>
            {showPrice && <span>{product.priceFormated}</span>}
          </ProductDetails>
        </Product>
      )
    })
  )
}

export default CartProductList
