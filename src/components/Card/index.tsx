import React from 'react'
import { CardStyle } from './styles'

const Card: React.FC = ({ children }) => {
  return <CardStyle>{children}</CardStyle>
}

export default Card
