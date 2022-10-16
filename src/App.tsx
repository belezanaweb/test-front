import Header from './components/organisms/Header/Header'
import Container from './components/organisms/Container/Container'
import GlobalStyle from './styles/global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Payment from './pages/Payment/Payment'
import Confirmation from './pages/Confirmation/Confirmation'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { HeaderContextProvider } from './contexts/HeaderContext'
import { CartContextProvider } from './contexts/CartContext'
import { PaymentContextProvider } from './contexts/PaymentContext'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeaderContextProvider>
          <CartContextProvider>
            <PaymentContextProvider>
              <Router>
                <Header />
                <Container>
                  <Routes>
                    <Route path="/" element={<Cart />}></Route>
                    <Route path="/payment" element={<Payment />}></Route>
                    <Route path="/confirmation" element={<Confirmation />}></Route>
                  </Routes>
                </Container>
              </Router>
            </PaymentContextProvider>
          </CartContextProvider>
        </HeaderContextProvider>
      </ThemeProvider>
    </>
  )
}
