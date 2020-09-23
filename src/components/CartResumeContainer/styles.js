import styled, { css } from 'styled-components';

import Cardboard from '~/components/Cardboard';

export const ResumeCardboard = styled(Cardboard)`
  margin: 1.25rem 0;
`;

export const ResumeLine = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0.75rem 0 0 0;

  font-size: 0.875rem;

  &:first-child {
    margin-top: 0;
  }

  ${({ total }) =>
    total &&
    css`
      font-weight: ${(props) => props.theme.fonts.weights.bold};
      margin-top: 1rem;
    `}

  ${({ featured }) =>
    featured &&
    css`
      color: ${(props) => props.theme.colors.primary};
    `}
`;
