import styled from 'styled-components';
import { NavLink as BaseLink } from 'react-router-dom';

export const Container = styled.nav`
  background-color: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 29, 0.22);
  width: 100%;
`;

export const Content = styled.div`
  height: 42px;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Link = styled(BaseLink)`
  cursor: pointer;
  color: #ccc;

  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  transition: color 0.2s;

  &:hover {
    color: #999;
  }

  &.active {
    color: #ff7800;
  }
`;
