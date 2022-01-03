import React, { useEffect, useState } from 'react'
import MenuTabs from '../../components/menuTabs/MenuTabs'
import Box from '@mui/material/Box'
import Cart from '../cart/Cart'
import Payment from '../payment/Payment'
import Confirmation from '../confirmation/Confirmation'
import api from '../../services/api'
import store from '../../store'
import { CircularProgress } from '@mui/material'

export default function Tabs() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('5b15c4923100004a006f3c07').then((response) => {
      store.dispatch({ type: 'setPurchaseData', value: response.data })
      setLoading(false)
    })
  })

  if (loading) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#EEE',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CircularProgress />
      </Box>
    )
  } else {
    return (
      <Box sx={{ width: '100%', backgroundColor: '#EEE' }}>
        <MenuTabs tab0={<Cart />} tab1={<Payment />} tab2={<Confirmation />} />
      </Box>
    )
  }
}
