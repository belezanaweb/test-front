import React, { ReactNode } from 'react'
import { PaperBox } from './Paper.style'

interface PaperProps {
  children: ReactNode;
  isSolid?: boolean;
}

export const Paper: React.FC<PaperProps> = ({ children, isSolid = true }: PaperProps) => (
  <PaperBox isSolid={isSolid}>{children}</PaperBox>
)
