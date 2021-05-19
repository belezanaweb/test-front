import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export const ContentTitle = ({ text }) => {
  return <S.ContentTitle>{text}</S.ContentTitle>
}

ContentTitle.propTypes = {
  text: PropTypes.string.isRequired
}
