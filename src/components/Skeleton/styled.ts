import styled from 'styled-components'

import { SKeletonProps } from './interfaces'

export const SSkeletonPulse = styled.div<SKeletonProps>`
  display: inline-block;
  border-radius: ${({ theme }) => theme.border.radius.small};
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  height: ${({ $height }) => $height || '100%'};
  width: ${({ $width }) => $width || '100%'};
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`
