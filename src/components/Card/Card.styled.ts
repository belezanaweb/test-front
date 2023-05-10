import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 24px 9.5px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;

  min-width: 60px;
  min-height: 60px;
`;

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 4px;
`;
