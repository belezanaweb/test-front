import React from 'react'
import PropTypes from 'prop-types'
import { TitleInput } from './style'

/*
    Component for PaymentData Item Box
    Props:
    titleInput - Title for description box
    children - Child component to render, example: TextField
*/

const PaymentData = (props) => {
  return (
    <>
      <TitleInput> {props.titleInput}</TitleInput>
      {props.children}
    </>
  )
}

PaymentData.prototype = {
  titleInput: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default PaymentData
