import React from 'react'
import PropTypes from 'prop-types'

import { Container, Label, Error } from './styles'

const Input = ({ label, id, width, hasError, children }) => (
  <Container width={width}>
    <Label htmlFor={id}>{label}</Label>
    {children}
    {hasError && <Error>Error message goes here.</Error>}
  </Container>
)

Input.defaultProps = {
  width: 100,
  hasError: false
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  hasError: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Input
