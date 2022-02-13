import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0.1rem 0.1rem 0.5rem 0 ${(props) => props.theme.shadow};

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5rem;
  padding: 1rem 2rem;

  a {
    color: ${(props) => props.theme.types.text};
    transition: opacity 0.2s;

    h1 {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: bold;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const CartInfo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  p {
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  div {
    text-align: right;
    margin-right: 10px;
    position: relative;

    svg {
      color: black;
    }

    span {
      width: 2rem;
      height: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      background-color: red;
      position: absolute;
      right: -1rem;

      font-size: 12px;
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
