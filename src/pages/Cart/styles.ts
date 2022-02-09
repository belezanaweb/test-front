import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const ProductListContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.types.title};
    font-size: 1.4rem;
    font-weight: bold;

    margin: 1rem 0 0.5rem;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.2rem;
  background-color: white;

  a {
    display: flex;
    gap: 1rem;
    padding: 1rem 1.2rem;

    font-size: 1.3rem;
    line-height: 1.6rem;

    border: 1px solid ${(props) => props.theme.border};
    border-radius: 0.3rem;

    img {
      width: 6.5rem;
      height: 6.5rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  span {
    align-self: flex-end;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.7rem;
  }
`;

export const CartSum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.2rem;

  border: 1px solid #ccc;
  border-radius: 0.3rem;

  li {
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${(props) => props.theme.types.text};
    text-transform: uppercase;
  }
`;
