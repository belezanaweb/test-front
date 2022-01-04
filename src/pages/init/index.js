import React, { useEffect, useState } from 'react'
import MenuTabs from '../../components/menuTabs/MenuTabs'
import Box from '@mui/material/Box'
import Bag from '../bag'
import Payment from '../payment'
import Confirmation from '../confirmation'
import api from '../../services/api'
import store from '../../store'
import { CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const tabNameToIndex = {
  sacola: 0,
  pagamento: 1,
  confirmacao: 2
}

export default function Init() {
  const { page } = useParams()
  const [loading, setLoading] = useState(true)
  const disableTabs = useSelector((state) => state.tabs)

  useEffect(() => {
    store.dispatch({ type: 'setTabs', field: 'currentTab', value: tabNameToIndex[page] })
  }, [page])

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
          height: '100%',
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
        <MenuTabs
          disabledTabs={disableTabs}
          tab0={<Bag />}
          tab1={<Payment />}
          tab2={<Confirmation />}
        />
      </Box>
    )
  }
}
