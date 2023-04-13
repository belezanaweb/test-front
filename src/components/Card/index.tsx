import { ReactNode } from 'react'

import { CardContainer } from './styles'
import { Spinner } from '../Spinner'

interface CardProps {
  children: ReactNode;
  loading?: boolean;
}

export function Card({ children, loading }: CardProps) {
  return <CardContainer>{loading ? <Spinner /> : children}</CardContainer>
}
