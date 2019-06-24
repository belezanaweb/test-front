import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'

function CheckoutSection ({ children, title, heading: Heading = 'h2', ...props }) {
  return (
    <CheckoutSection.Container {...props}>
      <CheckoutSection.Title as={Heading}>{title}</CheckoutSection.Title>
      <CheckoutSection.Body>{children}</CheckoutSection.Body>
    </CheckoutSection.Container>
  )
}

CheckoutSection.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.element,
  title: PropTypes.string.isRequired
}

CheckoutSection.Container = styled.section`
  grid-area: ${({ area }) => area || 'auto'};
`

CheckoutSection.Title = styled.h1`
  color: #999;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 17px;
  padding: 4px 10px;
  text-transform: uppercase;
`

CheckoutSection.Body = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 10px 12px;
`

export default CheckoutSection
