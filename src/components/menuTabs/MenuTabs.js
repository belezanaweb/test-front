import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import MenuTabsItem from './MenuTabsItem'
import store from '../../store'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MenuTabs = ({ tab0, tab1, tab2, disabledTabs }) => {
  const currentTab = useSelector((state) => state.tabs.currentTab)
  const history = useNavigate()
  const indexToTab = {
    0: 'sacola',
    1: 'pagamento',
    2: 'confirmacao'
  }

  const handleChange = (event, newValue) => {
    store.dispatch({ type: 'setTabs', field: 'currentTab', value: newValue })
    history(`/${indexToTab[newValue]}`)
  }

  return (
    <Box sx={{ width: '100%', backgroundColor: '#EEE', height: '100vh' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#FFF' }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="none"
          centered
          sx={{
            '.MuiTab-root.Mui-selected': {
              color: '#FF7800',
              fontWeight: 'bold'
            },
            boxShadow: 3
          }}
        >
          <Tab label="Sacola" disabled={disabledTabs.disabledTab0} />
          <Tab label="Pagamento" disabled={disabledTabs.disabledTab1} />
          <Tab label="Confirmação" disabled={disabledTabs.disabledTab2} />
        </Tabs>
      </Box>
      <MenuTabsItem value={currentTab} index={0}>
        {tab0}
      </MenuTabsItem>
      <MenuTabsItem value={currentTab} index={1}>
        {tab1}
      </MenuTabsItem>
      <MenuTabsItem value={currentTab} index={2}>
        {tab2}
      </MenuTabsItem>
    </Box>
  )
}

MenuTabs.propTypes = {
  tab0: PropTypes.node,
  tab1: PropTypes.node,
  tab2: PropTypes.node,
  disabledTabs: PropTypes.object
}

export default MenuTabs
