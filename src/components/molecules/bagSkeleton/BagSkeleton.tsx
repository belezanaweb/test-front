import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export const BagSkeleton = () => (
  <SkeletonTheme baseColor="#d7d7d7" highlightColor="#c9c9c9">
    <div>
      <Skeleton height={18} width={210} style={{ marginBottom: '5px' }} />
      <Skeleton height={320} />
    </div>
    <Skeleton height={130} />
    <Skeleton height={60} />
  </SkeletonTheme>
)
