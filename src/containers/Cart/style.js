import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
  }
`;

export default Container;
