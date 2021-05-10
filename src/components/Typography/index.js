import React from 'react'
import PropTypes from 'prop-types'

import { Text } from './styles.css'

const Typography = ({ children }) => {
  return <Text>{children}</Text>
}

Typography.propTypes = {
  children: PropTypes.element.isRequired
}

export default Typography
