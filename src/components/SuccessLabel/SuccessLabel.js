import React from 'react'

import { SuccessContainer, SuccessIcon, SuccessLabel } from './SuccessLabel.elements'

export default function SuccessLabelComponent({ children }) {
  return (
    <SuccessContainer>
      <SuccessIcon>✓</SuccessIcon>
      <SuccessLabel>{children}</SuccessLabel>
    </SuccessContainer>
  )
}
