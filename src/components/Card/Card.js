import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Card = ({ title, children }) => (
  <div>
    {!!title && <S.Title data-testid="title">{title}</S.Title>}
    <S.Card>{children}</S.Card>
  </div>
)

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string
}

Card.defaultProps = {
  title: undefined
}

export default Card
