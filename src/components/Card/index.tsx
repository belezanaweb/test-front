import { ReactNode } from 'react'

import { Spinner } from '../Spinner'

import { CardContainer } from './styles'

interface CardProps {
  children: ReactNode;
  loading?: boolean;
}

export function Card({ children, loading }: CardProps) {
  return <CardContainer>{loading ? <Spinner /> : children}</CardContainer>
}
