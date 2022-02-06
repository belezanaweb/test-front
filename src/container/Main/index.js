import { Grid } from '@mui/material'
import React from 'react'
import { MainContainer, TitleSteps, StepsContainer } from './style.js'
import Cart from '../Cart'
import Payment from '../Payment'

const Main = () => {
  return (
    <>
      <MainContainer>
        <StepsContainer container alignContent="center">
          <Grid item xs={3}>
            <TitleSteps colorsteps={'#FF7800'}>SACOLA</TitleSteps>
          </Grid>
          <Grid item xs={4}>
            <TitleSteps colorsteps={'#CCC'}>PAGAMENTO</TitleSteps>
          </Grid>
          <Grid item xs={5}>
            <TitleSteps colorsteps={'#CCC'}>CONFIRMAÇÃO</TitleSteps>
          </Grid>
        </StepsContainer>
        <Grid container alignContent="center">
          <Grid item xs={12}>
            <Cart />
          </Grid>
        </Grid>
      </MainContainer>
    </>
  )
}

export default Main
