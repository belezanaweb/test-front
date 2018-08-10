import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { Container, List, Item } from './styles'

const isActive = (path, name) => path.replace('/', '') === name

const Steps = ({ location: { pathname } }) => (
  <Container>
    <List>
      <Item isActive={isActive(pathname, 'basket')}>Sacola</Item>
      <Item isActive={isActive(pathname, 'checkout')}>Pagamento</Item>
      <Item isActive={isActive(pathname, 'finish')}>Confirmação</Item>
    </List>
  </Container>
)

Steps.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
}

export default withRouter(Steps)
