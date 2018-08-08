import styled from 'styled-components';

export const Steps = styled.div`
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding: 12px;
  display: flex;
`;

export const Step = styled.div`
  width: 33.3%;

  &:last-child {
    text-align: right;
  }
`;
