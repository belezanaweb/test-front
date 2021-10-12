import React, { useEffect, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ReactLoading from 'react-loading'
import Header from './components/Header'
import Routes from './routes'
import { CartActions } from './store/ducks/cart.ducks'
import theme from './styles/theme'

const App = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.cart)

  const loader = <ReactLoading type="spin" color={theme.colors.primary} className="loader" />

  useEffect(() => {
    dispatch(CartActions.cartRequest())
  }, [dispatch])

  if (isLoading) {
    return loader
  }
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={loader}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
