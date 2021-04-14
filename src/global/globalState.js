import React, { useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../constants/constants'
import GlobalStateContext from './globalStateContext'

const GlobalState = (props) => {
  const [cart, setCart] = useState({})
  const [products, setProducts] = useState([])

  const getProducts = () => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        setCart(response.data)
        setProducts(response.data.items)
      })
      .catch((error) => alert(error.message))
  }

  const data = { cart, products, getProducts, setCart, setProducts }

  return <GlobalStateContext.Provider value={data}>{props.children}</GlobalStateContext.Provider>
}

export default GlobalState
