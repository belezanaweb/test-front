import React from 'react'
import PropTypes from 'prop-types'
import PaperContainer from './paper.style'
import Title from '../title'

const Paper = ({ title, children }) => (
  <div>
    {title && <Title>{title}</Title>}
    <PaperContainer>{children}</PaperContainer>
  </div>
)

Paper.defaultProps = {
  title: '',
  children: PropTypes.objectOf(PropTypes.object)
}

Paper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.objectOf(PropTypes.any)
}

export default Paper
