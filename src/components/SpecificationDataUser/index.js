import React from 'react'
import PropTypes from 'prop-types'
import { ContainerSDUser, DescriptionSDUser } from './style'
import { Grid } from '@mui/material'

/*
    Component for Specification DataUser
    Props:
    numberCreditCard - Number of CreditCard
    nameCreditCard - Name of CreditCard
    expirationDate - Expirantion Date of CreditCard
*/
const SpecificationDataUser = (props) => {
  return (
    <>
      <ContainerSDUser>
        <Grid container style={{ padding: '10px' }}>
          <Grid item xs={12}>
            <DescriptionSDUser>{props.numberCreditCard}</DescriptionSDUser>
          </Grid>
          <Grid item xs={12}>
            <DescriptionSDUser>{props.nameCreditCard}</DescriptionSDUser>
          </Grid>
          <Grid item xs={12}>
            <DescriptionSDUser>{props.expirationDate}</DescriptionSDUser>
          </Grid>
        </Grid>
      </ContainerSDUser>
    </>
  )
}

SpecificationDataUser.prototype = {
  numberCreditCard: PropTypes.string.isRequered,
  nameCreditCard: PropTypes.string.isRequered,
  expirationDate: PropTypes.string.isRequered
}

export default SpecificationDataUser
