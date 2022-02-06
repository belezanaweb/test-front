import { Grid } from '@mui/material'
import React from 'react'
import { MainContainer } from './style.js'
import Cart from '../Cart'
import Payment from '../Payment'
import Confirmation from '../Confirmation'
import { Header } from '../../components/index.js'

const Main = () => {
  return (
    <>
      <MainContainer>
        <Header typeTab={'SACOLA'} />
        <Grid container alignContent="center" style={{ marginTop: '14%' }}>
          <Grid item xs={12}>
            <Payment />
          </Grid>
        </Grid>
      </MainContainer>
    </>
  )
}

export default Main
