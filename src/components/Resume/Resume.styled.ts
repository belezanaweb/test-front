import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  padding: 28px 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 25px;
`;

export const Sumary = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 8px;
`;

export const Item = styled.div`
  height: 22px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;
