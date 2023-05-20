import './App.css'
import Navbar from './components/Navbar'
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Bag from './pages/Bag'
import Payment from './pages/Payment'
import { PaymentContextProvider } from './contexts/payment'
import { Router } from './Router'

export default function App() {
  return (
    <BrowserRouter>
      <PaymentContextProvider>
        <Router />
      </PaymentContextProvider>
    </BrowserRouter>
  )
}
