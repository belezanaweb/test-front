import React, { useState, useEffect, useContext } from 'react'

import Cart from '../../Layout/Pages/Cart/Cart'
import Payment from '../../Layout/Pages/Payment/Payment'
import Checkout from '../../Layout/Pages/Checkout/Checkout'
import { products } from '../../Store/Actions'
import DataContext from '../../Store/DataContext'
import './Content.css'

const Content = (props) => {
  const { dispatch } = useContext(DataContext)
  const page = props.page
  const handleChange = (page) => {
    props.onChangePage(page)
  }
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
        response = await response.json()
        setError('')
        products(dispatch, response)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError('API call error')
      }
    }
    fetchMyAPI()
  }, [dispatch])

  return (
    <div className="Content">
      {loading
        ? 'Buscando dados...'
        : error
        ? error
        : (page === 'Cart' && <Cart onChangePage={handleChange} />) ||
          (page === 'Payment' && <Payment onChangePage={handleChange} />) ||
          (page === 'Checkout' && <Checkout />)}
    </div>
  )
}

export default Content
