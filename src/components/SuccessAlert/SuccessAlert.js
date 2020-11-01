import React from 'react'
import { SuccessAlertContainer, SuccessAlertText, SuccessAlertIcon } from './SuccessAlert.styles'

export const SuccessAlert = (props) => (
  <SuccessAlertContainer>
    <SuccessAlertIcon />
    <SuccessAlertText {...props} />
  </SuccessAlertContainer>
)
