import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Btn = styled(Link)`
  width: 100%;
  padding: 18px 0;
  display: block;
  border: none;
  background-color: #FF6C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-bottom: 3px solid #D45A00;
  font-size: 20px;
  text-transform: uppercase;
  color: #FFF;
  text-align: center;
  font-weight: bold;
  margin: 20px auto;
  text-decoration: none;
  transition: all ease .3s;

  &.disable {
    pointer-events: none;
    background-color: #b7b7b7;
    border-bottom-color: #6f6c6a;
  }

  &:hover {
    background-color: #D45A00;
    transition: all ease .3s;
  }
`;
