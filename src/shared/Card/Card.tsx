import { PropsWithChildren } from 'react'

import { CardContainer } from './Card.styled'
import { CardProps } from './Card.types'

export const Card = ({ children, centered }: PropsWithChildren<CardProps>) => {
  return (
    <CardContainer centered={centered}>
      {children}
    </CardContainer>
  )
}