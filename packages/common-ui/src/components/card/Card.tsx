import { ReactNode } from 'react'

import { cardStyles } from './styles'

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children }: CardProps) {
  return <div className={cardStyles()}>{children}</div>
}
