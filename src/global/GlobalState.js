import React, { useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import { baseURL } from '../constants/urls'

const GlobalState = (props) => {
  const [cart, setCart] = useState({})
  const [products, setProducts] = useState([])
  const [userCard, setUserCard] = useState({})

  const getProducts = () => {
    axios
      .get(`${baseURL}`)
      .then((response) => {
        setCart(response.data)
        setProducts(response.data.items)
      })
      .catch((error) => alert(error.message))
  }

  const data = { cart, products, getProducts, userCard, setUserCard }

  return <GlobalStateContext.Provider value={data}>{props.children}</GlobalStateContext.Provider>
}

export default GlobalState
