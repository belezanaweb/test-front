import React, { useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import { baseURL } from '../constants/urls'

const GlobalState = (props) => {
  const [cart, setCart] = useState({})
  const [products, setProducts] = useState([])

  const getProducts = () => {
    axios
      .get(`${baseURL}`)
      .then((response) => {
        console.log(response.data.items)
        setCart(response.data)
        setProducts(response.data.items)
      })
      .catch((error) => alert(error.message))
  }

  const data = { cart, products, getProducts }

  return <GlobalStateContext.Provider value={data}>{props.children}</GlobalStateContext.Provider>
}

export default GlobalState
