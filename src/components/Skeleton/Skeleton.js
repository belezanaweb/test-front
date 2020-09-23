import React from 'react';

import { SkeletonContainer, SkeletonContent, SkeletonPulse } from './styles';

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonContent>
        <SkeletonPulse />
        <SkeletonPulse />
        <SkeletonPulse />
        <SkeletonPulse />
        <SkeletonPulse />
      </SkeletonContent>
    </SkeletonContainer>
  );
};

export default Skeleton;
