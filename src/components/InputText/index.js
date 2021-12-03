import React from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from './styled'

InputText.propTypes = {
  block: PropTypes.bool,
  error: PropTypes.bool
}

InputText.defaultProps = {
  block: false,
  error: false
}

export default function InputText(props) {
  return <StyledInput type="text" {...props} />
}
