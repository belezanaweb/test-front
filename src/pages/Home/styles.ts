import styled from 'styled-components';
import { ButtonStyle } from '../../components/Button/styles';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 36rem) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    list-style: none;
  }

  @media (min-width: 56rem) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    padding: 2rem;

    background: #fff;
    border-radius: 0.4rem;
    box-shadow: 0.1rem 0.1rem 0.5rem 0 ${(props) => props.theme.shadow};

    img {
      align-self: center;
      max-width: 25rem;
    }

    > p {
      font-size: 1.4rem;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 2rem;
      font-weight: bold;
      margin: 1rem 0 1rem;
    }
  }
`;

export const Button = styled(ButtonStyle)`
  justify-content: center;
  gap: 5rem;
  width: 70%;

  @media (min-width: 36rem) {
    justify-content: space-around;
    width: 100%;
    gap: 0;
  }

  .quantity {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: -1rem;
    gap: 1rem;
  }
`;
