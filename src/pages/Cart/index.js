import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCartItems } from '../../actions/cartActios'
import { getCartItems } from '../../services/cart'

const Cart = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const { data } = await getCartItems()
      dispatch(setCartItems(data))
    }

    getData()
  }, [dispatch])

  return <div>Hello World</div>
}

export default Cart
