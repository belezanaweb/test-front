import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from './styles'

export const ActionButton = ({ handlePaymentInformation, actionText, pathToGo }) => {
  const location = window.location.pathname
  const navigate = useNavigate()
  const handleClick = () => {
    if (location === '/payment') {
      handlePaymentInformation()
    }
    navigate(pathToGo)
  }

  return (
    <ButtonContainer role="button" onClick={handleClick}>
      {actionText}
    </ButtonContainer>
  )
}
