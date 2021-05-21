import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'
import { useHistory } from 'react-router'

export const Button = ({ text, path }) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/checkout/${path}`)
  }

  return <S.Button onClick={handleClick}>{text}</S.Button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}
