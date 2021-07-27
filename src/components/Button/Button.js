import React from 'react'
import { ButtonContainer, ButtonSection } from './styles'

const Button = ({ label, ...props }) => {
  return (
    <ButtonSection>
      <ButtonContainer type="submit" {...props}>
        {label}
      </ButtonContainer>
    </ButtonSection>
  )
}

export default Button
