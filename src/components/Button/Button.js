import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Button = ({ children, ...rest }) => <S.Button {...rest}>{children}</S.Button>

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Button
