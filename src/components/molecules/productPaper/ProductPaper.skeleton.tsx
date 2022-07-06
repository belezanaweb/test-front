import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Container } from './ProductPaper.style'

export const ProductPaperSkeleton = () => (
  <Container>
    <Skeleton height={18} width={210} style={{ marginBottom: '5px' }} />
    <Skeleton height={320} />
  </Container>
)
