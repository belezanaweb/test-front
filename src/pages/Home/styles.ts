import styled from 'styled-components';
import { ButtonStyle } from '../../components/Button/styles';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0.1rem 0.1rem 0.5rem 0 ${(props) => props.theme.shadow};

    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > p {
      font-size: 16px;
      line-height: 20px;
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
  justify-content: space-between;

  .quantity {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: -1rem;
    gap: 1rem;
  }
`;
