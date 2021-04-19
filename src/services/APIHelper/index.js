import React, { useState } from 'react'
import axios from 'axios'
import { Context } from '../context'

const APIHelper = (props) => {
  const [cart, setCart] = useState({})
  const [products, setProducts] = useState([])
  const [userCard, setUserCard] = useState({})

  const getProducts = () => {
    axios
      .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => {
        setCart(response.data)
        setProducts(response.data.items)
      })
      .catch((error) => alert(error.message))
  }

  const data = { cart, products, getProducts, userCard, setUserCard }

  return <Context.Provider value={data}>{props.children}</Context.Provider>
}

export { APIHelper }
