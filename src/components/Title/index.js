import React from 'react'
import PropTypes from 'prop-types'

import { TitleStyles } from './styles'

const Title = ({ title, color }) => <TitleStyles color={color}>{title}</TitleStyles>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string
}

Title.defaultProps = {
  color: '#999'
}

export default Title
