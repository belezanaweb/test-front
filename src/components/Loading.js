import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);
  color: var(--color-orange-1);
`

const Loading = () => (
  <LoadingContainer>
    <i className='fa fa-spinner fa-pulse fa-5x' aria-hidden="true"></i>
  </LoadingContainer>
)

export default Loading
