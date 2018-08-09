import React from 'react'
import PropTypes from 'prop-types'

import { Container, Label, Error } from './styles'

const Input = ({ label, id, width, children }) => (
  <Container width={width}>
    <Label htmlFor={id}>{label}</Label>
    {children}
    <Error>Error message goes here.</Error>
  </Container>
)

Input.defaultProps = {
  width: 100
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  children: PropTypes.node.isRequired
}

export default Input
