import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import logo from '../../assets/img/logo.svg'

import { Container, Logo, Title } from './styles'

const Greeting = ({ greeting }) => (
  <Container>
    <Logo src={logo} alt='ReactJS Logo' />
    <Title>{greeting.message}</Title>
  </Container>
)

Greeting.propTypes = {
  greeting: PropTypes.shape({
    message: PropTypes.string
  }).isRequired
}

const mapStateToProps = state => ({ greeting: state.greeting })

export default connect(mapStateToProps)(Greeting)
