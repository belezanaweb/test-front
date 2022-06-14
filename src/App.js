import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PageContainer } from './components/PageContainer'
import { Cart } from './pages/Cart/'
import { Payment } from './pages/Payment'
import { Confirmation } from './pages/Confirmation'
import { useEffect } from 'react'
import { api } from './services/api'
import { useDispatch } from 'react-redux'
import { loadProducts } from './redux/slices/productsSlice'
import { loadSummaryInfo } from './redux/slices/summarySlice'
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getProducts = async () => {
      const res = await api.get()
      dispatch(loadProducts(res.data.items))
      console.log(res)
      dispatch(
        loadSummaryInfo({
          subTotal: res.data.subTotal,
          discount: res.data.discount,
          shippingCost: res.data.shippingTotal,
          total: res.data.total
        })
      )
    }

    getProducts()
  }, [dispatch])
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </PageContainer>
  )
}

export default App
