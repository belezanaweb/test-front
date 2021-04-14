import axios from 'axios'
import { useEffect, useState } from 'react'

export const useRequestData = (url, initialState) => {
  const [cart, setCart] = useState([initialState])
  const [products, setProducts] = useState([initialState])

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCart(response.data)
        setProducts(response.data.items)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [url])

  return [cart, products]
}
