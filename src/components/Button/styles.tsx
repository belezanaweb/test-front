import styled from 'styled-components';

export const Container = styled.button`
  background-color: #ff6c00;
  border-radius: 3px;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 18px 8px;

  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    background-color: #d45a00;
  }

  &:disabled {
    background-color: #c05a00;
    cursor: not-allowed;
  }
`;
