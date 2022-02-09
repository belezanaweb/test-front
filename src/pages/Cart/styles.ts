import styled from 'styled-components';

export const ProductList = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.2rem;

  a {
    display: flex;
    gap: 1rem;

    font-size: 1.3rem;
    padding: 1rem 1.2rem;
    border: 1px solid ${(props) => props.theme.border};
    line-height: 1.6rem;
  }
`;
