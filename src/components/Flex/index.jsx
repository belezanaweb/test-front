import React from 'react'
import PropTypes from 'prop-types'
import { StyledDiv } from './styled'

Flex.propTypes = {
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  flexWrap: PropTypes.string
}

Flex.defaultProps = {
  alignItems: 'flex-start',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'wrap'
}

export default function Flex(props) {
  return <StyledDiv {...props}>{props.children}</StyledDiv>
}
