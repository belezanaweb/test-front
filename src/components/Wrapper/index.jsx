import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export const Wrapper = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

Wrapper.propTypes = {
  children: PropTypes.node
}
