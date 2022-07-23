import React from 'react'
import { Container } from './style'
import { useNavigate } from 'react-router-dom'

export const Button = ({
  type = 'button',
  form = '',
  handleSubmit = () => {},
  text,
  path,
  disabled = false
}) => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    if (type === 'submit') {
      handleSubmit()
    }
    navigate(path)
  }

  return (
    <Container disabled={disabled} type={type} form={form} role="button" onClick={handleClick}>
      {text}
    </Container>
  )
}
