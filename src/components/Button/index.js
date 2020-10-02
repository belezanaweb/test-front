import React from 'react'
import { useHistory } from 'react-router-dom'
import { ButtonWrapper } from './style'

const Button = ({ text, path }) => {
  const history = useHistory()
  const goToPage = (path) => {
    history.push(path)
  }

  return (
    <ButtonWrapper onClick={() => goToPage(path)}>{text}</ButtonWrapper>
  )
}

export default Button