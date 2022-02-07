import React from 'react'
import PropTypes from 'prop-types'
import { ContainerSDUser, DescriptionSDUser, GridContainerBox } from './style'
import { Grid } from '@mui/material'

/*
    Component for Specification DataUser
    Props:
    numberCreditCard - Number of CreditCard
    nameCreditCard - Name of CreditCard
    expirationDate - Expirantion Date of CreditCard
*/
const SpecificationDataUser = (props) => {
  const { numberCreditCard, nameCreditCard, expirationDate } = props
  return (
    <>
      <ContainerSDUser>
        <GridContainerBox container>
          <Grid item xs={12}>
            <DescriptionSDUser>{numberCreditCard}</DescriptionSDUser>
          </Grid>
          <Grid item xs={12}>
            <DescriptionSDUser>{nameCreditCard}</DescriptionSDUser>
          </Grid>
          <Grid item xs={12}>
            <DescriptionSDUser>{expirationDate}</DescriptionSDUser>
          </Grid>
        </GridContainerBox>
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
