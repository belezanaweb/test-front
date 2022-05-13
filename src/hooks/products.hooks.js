import { useState, useEffect } from 'react'
import api from '../api/api'

export function useProducts() {
  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    api
      .get()
      .then((response) => {
        setListProducts(response?.data)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  return listProducts
}
