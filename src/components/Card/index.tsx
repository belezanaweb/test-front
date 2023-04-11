import { ReactNode } from 'react'
import { CardContainer } from './styles'

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <CardContainer>{children}</CardContainer>
}
