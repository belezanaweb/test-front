import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

export const ContentWrapper = ({ children }) => {
  return <S.ContentWrapper>{children}</S.ContentWrapper>
}

ContentWrapper.propTypes = {
  children: PropTypes.node
}
