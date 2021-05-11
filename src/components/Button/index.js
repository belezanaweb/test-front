import React from 'react'
import PropTypes from 'prop-types'

import { CustomButton } from './styles.css'

const Button = ({ label, type, disabled, onClick }) => {
  return (
    <CustomButton type={type} disabled={disabled} onClick={onClick}>
      {label}
    </CustomButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'button',
  disabled: false
}

export default Button
