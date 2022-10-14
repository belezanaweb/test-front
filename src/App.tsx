import Header from './components/organisms/Header/Header'
import Container from './components/organisms/Container/Container'
import GlobalStyle from './styles/global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './components/pages/Cart/Cart'
import Payment from './components/pages/Payment/Payment'
import Confirmation from './components/pages/Confirmation/Confirmation'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { HeaderContextProvider } from './contexts/HeaderContext'
import { CartContextProvider } from './contexts/CartContext'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeaderContextProvider>
          <CartContextProvider>
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
          </CartContextProvider>
        </HeaderContextProvider>
      </ThemeProvider>
    </>
  )
}
