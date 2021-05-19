import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

const MainWrapper = ({ children }) => {
  return <S.MainWrapper>{children}</S.MainWrapper>
}

MainWrapper.propTypes = {
  children: PropTypes.node
}
