import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const MainContent = styled.div`
  width: 100%;
  height: calc(100vh - 37.5px);
  background-color: ${(props) => props.theme.background};
  padding: 1rem;
`;
