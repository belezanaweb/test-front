import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Routes from './routes'
import { CartActions } from './store/ducks/cart.ducks'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(CartActions.cartRequest())
  }, [dispatch])
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  )
}

export default App
