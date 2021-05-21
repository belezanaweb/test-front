import { ContentTitle } from 'components/ContentTitle'
import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

export const ContentWrapper = ({ children, title }) => {
  return (
    <div>
      {title && <ContentTitle text={title} />}
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </div>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}
