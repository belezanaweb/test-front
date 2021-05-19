import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

export const Button = ({ text }) => {
  return <S.Button>{text}</S.Button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}
