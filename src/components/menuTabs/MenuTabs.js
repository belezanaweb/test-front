import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import MenuTabsItem from './MenuTabsItem'

const MenuTabs = ({ tab0, tab1, tab2 }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', backgroundColor: '#EEE', height: '100vh' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#FFF' }}>
        <Tabs
          value={value}
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
          <Tab label="Sacola" />
          <Tab label="Pagamento" />
          <Tab label="Confirmação" />
        </Tabs>
      </Box>
      <MenuTabsItem value={value} index={0}>
        {tab0}
      </MenuTabsItem>
      <MenuTabsItem value={value} index={1}>
        {tab1}
      </MenuTabsItem>
      <MenuTabsItem value={value} index={2}>
        {tab2}
      </MenuTabsItem>
    </Box>
  )
}

MenuTabs.propTypes = {
  tab0: PropTypes.node,
  tab1: PropTypes.node,
  tab2: PropTypes.node
}

export default MenuTabs
