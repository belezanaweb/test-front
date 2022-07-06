import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { BagDetailsSkeleton } from '../bagDetails'
import { ProductPaperSkeleton } from '../productPaper'
import { Container } from './PageSkeleton.style'

export const PageSkeleton = () => (
  <SkeletonTheme baseColor="#d7d7d7" highlightColor="#c9c9c9">
    <Container>
      <ProductPaperSkeleton />
      <BagDetailsSkeleton />
    </Container>
  </SkeletonTheme>
)
