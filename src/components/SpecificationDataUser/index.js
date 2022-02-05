import React from 'react'
import PropTypes from 'prop-types'
import { ContainerSDUser, DescriptionSDUser } from './style'

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
        <DescriptionSDUser>{props.numberCreditCard}</DescriptionSDUser>
        <DescriptionSDUser>{props.nameCreditCard}</DescriptionSDUser>
        <DescriptionSDUser>{props.expirationDate}</DescriptionSDUser>
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
