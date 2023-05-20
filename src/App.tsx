import './App.css'
import CardProducts from './components/CardProducts'
import Navbar from './components/Navbar'
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import data from '../data.json'
import { BrowserRouter } from 'react-router-dom'
import Bag from './pages/Bag'
import Payment from './pages/Payment'
import { PaymentContextProvider } from './contexts/payment'
import { Router } from './Router'

export default function App() {
  console.log('data', data)
  return (
    // <Flex h="100vh" bg="#F5F5F5" gap={'20px'} flexDir={'column'}>
    //   <Navbar />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Bag />} />
    //       <Route path="/payment" element={<Payment />} />
    //     </Routes>
    //   </BrowserRouter>
    // </Flex>

    <PaymentContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PaymentContextProvider>
  )
}
