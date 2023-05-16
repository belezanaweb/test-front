import { ReactNode } from 'react';

import { cardStyles } from './styles';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children }: CardProps) {
  return <div className={cardStyles()}>{children}</div>
}
