import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MenuProps {
  itemSelected: number;
};

const Menu: React.FC<MenuProps> = ({ itemSelected }) => {
  return (
    <MenuUI>
      <MenuItem>
        <MenuLink to="/" itemSelected={itemSelected === 0}>
            SACOLA
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/payment" itemSelected={itemSelected === 1}>
            PAGAMENTO
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/confirmation" itemSelected={itemSelected === 2}>
            CONFIRMAÇÃO
        </MenuLink>
      </MenuItem>
    </MenuUI>
  );
};

const MenuUI = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.li`
  margin: 0 38px 0 0;
  &:last-child {
    margin: 0
  }
`;

const MenuLink = styled(Link)<{ itemSelected: boolean }>`
    color: #ccc;
    text-decoration: none;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    ${({ itemSelected }) => itemSelected && 'color: #FF7800;font-weight: bold;'};
`;

export default Menu;