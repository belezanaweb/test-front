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
  const [color, setColor] = useState({})

  useEffect(() => {
    if (props.typeTab === 'SACOLA') {
      setColor({
        sacola: true,
        pagto: false,
        confirm: false
      })
    } else if (props.typeTab === 'PAGAMENTO') {
      setColor({
        sacola: false,
        pagto: true,
        confirm: false
      })
    } else if (props.typeTab === 'CONFIRMACAO') {
      setColor({
        sacola: false,
        pagto: false,
        confirm: true
      })
    }
  }, [props])

  return (
    <>
      <StepsContainer container alignContent="center">
        <Grid item xs={3}>
          <TitleSteps colorsteps={color.sacola}>SACOLA</TitleSteps>
        </Grid>
        <Grid item xs={4}>
          <TitleSteps colorsteps={color.pagto}>PAGAMENTO</TitleSteps>
        </Grid>
        <Grid item xs={5}>
          <TitleSteps colorsteps={color.confirm}>CONFIRMAÇÃO</TitleSteps>
        </Grid>
      </StepsContainer>
    </>
  )
}

Header.prototype = {
  typeTab: PropTypes.string.isRequired
}

export default Header