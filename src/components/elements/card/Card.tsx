import React, { PropsWithChildren } from 'react'

import { StyledCard } from './Card.styled'

type CardProps = PropsWithChildren<{
  'data-testid'?: string
}>

function Card({ children, ...props }: CardProps): JSX.Element {
  return <StyledCard {...props}>{children}</StyledCard>
}

export default Card
