import React, { ReactNode } from 'react'
import { Heading } from './Title.style'

interface TitleProps {
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }: TitleProps) => (
  <Heading>{children}</Heading>
)
