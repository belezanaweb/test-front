import * as React from 'react'
import MenuTabs from '../../components/menuTabs/MenuTabs'
import Box from '@mui/material/Box'
import Cart from '../cart/Cart'

export default function Tabs() {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#EEE' }}>
      <MenuTabs tab0={<Cart />}></MenuTabs>
    </Box>
  )
}
