import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 3px;
  border: 1px solid #CCC;
  padding: 15px 13px 13px 14px;
  margin: 20px 0 20px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 92%;
  }
`;

export const ValueInfo = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    &:last-child {
      margin-top: auto !important;
    }
  }
`;
