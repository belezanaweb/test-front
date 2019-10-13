import React from 'react'
import { Link } from 'react-router-dom'
import { StyledFooterButton } from './style'

const FooterButton = ({ to, ...props }) => {
  return (
    <Link to={to}>
      <StyledFooterButton {...props} />
    </Link>
  )
}

export default FooterButton
