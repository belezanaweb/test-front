import React from 'react'
import PropTypes from 'prop-types'
import TitleContainer from './title.style'

const Title = ({ children, spacedTitle }) => (
  <TitleContainer spacedTitle={spacedTitle}>{children}</TitleContainer>
)

Title.defaultProps = {
  spacedTitle: false,
  children: ''
}

Title.propTypes = {
  spacedTitle: PropTypes.bool,
  children: PropTypes.string
}

export default Title
