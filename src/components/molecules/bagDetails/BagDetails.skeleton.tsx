import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Container } from './BagDetails.style'

export const BagDetailsSkeleton = () => (
  <Container>
    <Skeleton height={130} />
    <Skeleton height={60} />
  </Container>
)
