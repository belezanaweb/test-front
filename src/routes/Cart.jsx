import React from 'react'
import useSWR from 'swr'
import URL from '../Utils/constants.js'

const Cart = () => {
  const { data: result, error } = useSWR(URL)

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

  return <div>{result.discount}</div>
}

export default Cart
