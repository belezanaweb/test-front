import React, { ReactNode } from 'react'
import { Title } from '../title'
import { PaperBox } from './Paper.style'

interface PaperProps {
  children: ReactNode
  isSolid?: boolean
  title?: string
}

export const Paper: React.FC<PaperProps> = ({ children, isSolid = true, title }: PaperProps) => (
  <section>
    {title && <Title>{title}</Title>}
    <PaperBox isSolid={isSolid}>{children}</PaperBox>
  </section>
)
