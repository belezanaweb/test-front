import styled from 'styled-components';

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: 50%;
    margin-right: 1.2rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;
