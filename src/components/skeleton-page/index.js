import React from 'react';
import styled from 'styled-components';

import Container from '../container';

const StyledContainer = styled.div`
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: calc(100% - 40px);
  background-color: #eee;
  box-sizing: border-box;
`;

const SkeletonPulse = styled.div`
  display: inline-block;
  height: 5.625rem;
  width: 100%;
  background: linear-gradient(-90deg, #d0cece 0%, #fff 50%, #d0cece 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  border-radius: 0.25rem;
  margin-bottom: 1rem;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  &:nth-child(1) {
    height: 2.5rem;

    @media (min-width: 768px) {
      height: 4.5rem;
      margin-bottom: 2rem;
    }
  }

  &:last-child {
    height: 7.5rem;
    margin-top: 1rem;
  }
`;

const SkeletonPage = function() {
  return (
    <StyledContainer>
      <Container>
        <SkeletonPulse />
        <SkeletonPulse />
        <SkeletonPulse />
        <SkeletonPulse />
        <SkeletonPulse />
      </Container>
    </StyledContainer>
  );
};

export default SkeletonPage;
