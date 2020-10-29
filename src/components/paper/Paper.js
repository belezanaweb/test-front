import React from 'react'
import PropTypes from 'prop-types'
import PaperContainer from './paper.style'
import Title from '../title'

const Paper = ({ title, children, spacedTitle }) => (
  <div>
    {title && <Title spacedTitle={spacedTitle}>{title}</Title>}
    <PaperContainer>{children}</PaperContainer>
  </div>
)

Paper.defaultProps = {
  title: '',
  children: PropTypes.any,
  spacedTitle: false
}

Paper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
  spacedTitle: PropTypes.bool
}

export default Paper
