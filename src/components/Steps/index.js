import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { Container, Item } from './styles'

const isActive = (path, name) => path.replace('/', '') === name

const Steps = ({ location: { pathname } }) => (
  <Container>
    <Item className={isActive(pathname, 'checkout') || isActive(pathname, 'finish')  ? 'disable' : ''} isActive="isActive">Sacola</Item>
    <Item isActive={isActive(pathname, 'checkout')}>Pagamento</Item>
    <Item isActive={isActive(pathname, 'finish')}>Confirmação</Item>
  </Container>
)

Steps.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
}

export default withRouter(Steps)