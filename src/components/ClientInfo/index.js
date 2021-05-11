import React from 'react'
import PropTypes from 'prop-types'
import { Container, Text } from './styles.css'

const ClientInfo = ({ creditCard, name, date }) => {
  return (
    <Container>
      <Text>****.****.****.{creditCard?.replace(/\./g, '').slice(12)}</Text>
      <Text>{name}</Text>
      <Text>{date}</Text>
    </Container>
  )
}

ClientInfo.propTypes = {
  creditCard: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default ClientInfo
