import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 37.5px);
  background-color: ${(props) => props.theme.background};
  padding: 1rem;
`;
