import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonProps } from '../../types';

export function Button({ children, to, onClick }: ButtonProps) {
  return (
    <Component to={to} onClick={onClick}>
      {children}
    </Component>
  );
}

const Component = styled(Link)`
  display: block;
  background: ${({ theme }) => theme.colors.orange400};
  box-shadow: ${({ theme }) => theme.shadows.button};
  border: none;
  color: #fff;
  height: 60px;
  line-height: 60px;
  width: 100%;
  border-radius: 3px;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: background 0.2s;
  cursor: pointer;

  &:hover, &:active {
    background-color: ${({ theme }) => theme.colors.orange800};
  }
`;
