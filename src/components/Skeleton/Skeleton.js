import React from 'react';

import { Container, Content, SkeletonPulse } from './styles';

const Skeleton = () => {
  return (
    <Container>
      <Content>
        <SkeletonPulse />
        <SkeletonPulse />
        <SkeletonPulse />
        <SkeletonPulse />
        <SkeletonPulse />
      </Content>
    </Container>
  );
};

export default Skeleton;
