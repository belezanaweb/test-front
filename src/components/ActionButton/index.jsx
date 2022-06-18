import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from './styles'

export const ActionButton = ({
  type = 'button',
  form = '',
  handleSubmit = () => {},
  actionText,
  pathToGo,
  disabled = false
}) => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    if (type === 'submit') {
      handleSubmit()
    }

    navigate(pathToGo)
  }

  return (
    <ButtonContainer
      disabled={disabled}
      type={type}
      form={form}
      role="button"
      onClick={handleClick}
    >
      {actionText}
    </ButtonContainer>
  )
}
