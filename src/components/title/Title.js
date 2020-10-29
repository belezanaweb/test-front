import React from 'react'
import PropTypes from 'prop-types'
import TitleContainer from './title.style'

const Title = ({ children }) => <TitleContainer>{children}</TitleContainer>

Title.defaultProps = {
  children: ''
}

Title.propTypes = {
  children: PropTypes.string
}

export default Title
