import React from 'react'
import * as S from './styled'
import { useNavigate } from 'react-router-dom'

const Button = ({ text, path, disabled }) => {
  let navigate = useNavigate()
  return (
    <S.Button onClick={() => navigate(`${path}`)} disabled={disabled}>
      {text}
    </S.Button>
  )
}

export default Button
