import React, { useEffect } from 'react'
import useSWR from 'swr'
import URL from '../utils/constants.js'
import { useSelector, useDispatch } from 'react-redux'
import { setTotal } from '../reducer/Cart'

const Cart = () => {
  const { data: result, error } = useSWR(URL)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.cart.total)

  useEffect(() => {
    if (result) {
      dispatch(setTotal(result.total))
    }
  }, [result])

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

  return (
    <>
      <div>Cart</div>
    </>
  )
}

export default Cart
