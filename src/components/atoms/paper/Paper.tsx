import React, { ReactNode } from 'react'
import { Title } from '../title'
import { PaperBox } from './Paper.style'

export interface PaperProps {
  children: ReactNode
  isSolid?: boolean
  title?: string
  paddingBottom?: boolean
}

export const Paper: React.FC<PaperProps> = ({
  children,
  isSolid = true,
  title,
  paddingBottom
}: PaperProps) => (
  <div>
    {title && <Title>{title}</Title>}
    <PaperBox isSolid={isSolid} paddingBottom={paddingBottom}>
      {children}
    </PaperBox>
  </div>
)
