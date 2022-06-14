import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from './styles'

export const ActionButton = ({ actionText, pathToGo }) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(pathToGo)
  return <ButtonContainer onClick={handleClick}>{actionText}</ButtonContainer>
}
