import React, { useEffect, useState } from 'react'
import { StepsContainer, TitleSteps } from './style'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

/*
    Component for Header
    Props:
    TypeTab - Type of tab selected
*/

const Header = (props) => {
  const { typeTab } = props
  const [color, setColor] = useState({})

  useEffect(() => {
    if (typeTab === 'SACOLA') {
      setColor({
        sacola: true,
        pagto: false,
        confirm: false
      })
    } else if (typeTab === 'PAGAMENTO') {
      setColor({
        sacola: false,
        pagto: true,
        confirm: false
      })
    } else if (typeTab === 'CONFIRMACAO') {
      setColor({
        sacola: false,
        pagto: false,
        confirm: true
      })
    }
  }, [typeTab])

  return (
    <>
      <StepsContainer container alignContent="center">
        <Grid item xs={3}>
          <TitleSteps colorsteps={color.sacola ? 1 : 0}>SACOLA</TitleSteps>
        </Grid>
        <Grid item xs={4}>
          <TitleSteps colorsteps={color.pagto ? 1 : 0}>PAGAMENTO</TitleSteps>
        </Grid>
        <Grid item xs={5}>
          <TitleSteps colorsteps={color.confirm ? 1 : 0}>CONFIRMAÇÃO</TitleSteps>
        </Grid>
      </StepsContainer>
    </>
  )
}

Header.prototype = {
  typeTab: PropTypes.string.isRequired
}

export default Header
