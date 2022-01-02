import React, { useEffect } from 'react'
import MenuTabs from '../../components/menuTabs/MenuTabs'
import Box from '@mui/material/Box'
import Cart from '../cart/Cart'
import Payment from '../payment/Payment'
import Confirmation from '../confirmation/Confirmation'
import api from '../../services/api'

export default function Tabs() {
  useEffect(() => {
    api.get('5b15c4923100004a006f3c07').then((response) => {
      console.log(response.data)
    })
  })

  return (
    <Box sx={{ width: '100%', backgroundColor: '#EEE' }}>
      <MenuTabs tab0={<Cart />} tab1={<Payment />} tab2={<Confirmation />} />
    </Box>
  )
}
