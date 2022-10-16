import Header from './components/organisms/Header/Header'
import Container from './components/organisms/Container/Container'
import GlobalStyle from './styles/global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { HeaderContextProvider } from './contexts/HeaderContext'
import { CartContextProvider } from './contexts/CartContext'
import { PaymentContextProvider } from './contexts/PaymentContext'
import { lazy, Suspense } from 'react'
import Spinner from './components/organisms/Spinner/Spinner'

const Cart = lazy(() => import('./pages/Cart/Cart'))
const Payment = lazy(() => import('./pages/Payment/Payment'))
const Confirmation = lazy(() => import('./pages/Confirmation/Confirmation'))

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <HeaderContextProvider>
        <CartContextProvider>
          <PaymentContextProvider>
            <Suspense fallback={<Spinner />}>
              <Router>
                <ThemeProvider theme={theme}>
                  <Header />
                  <Container>
                    <Routes>
                      <Route path="/" element={<Cart />}></Route>
                      <Route path="/payment" element={<Payment />}></Route>
                      <Route path="/confirmation" element={<Confirmation />}></Route>
                    </Routes>
                  </Container>
                </ThemeProvider>
              </Router>
            </Suspense>
          </PaymentContextProvider>
        </CartContextProvider>
      </HeaderContextProvider>
    </>
  )
}
