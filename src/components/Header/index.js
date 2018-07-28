import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { Container, List, ListItem } from './styles'

const Header = ({ location }) => (
  <Container>
    <header>
      <nav>
        <List>
          <ListItem active={location.pathname === '/' ? true : false}>SACOLA</ListItem>
          <ListItem active={location.pathname === '/payment' ? true : false}>PAGAMENTO</ListItem>
          <ListItem active={location.pathname === '/confirmation' ? true : false}>
            CONFIRMAÇÃO
          </ListItem>
        </List>
      </nav>
    </header>
  </Container>
)

Header.propTypes = {
  location: PropTypes.shape({}).isRequired
}

export default withRouter(Header)
