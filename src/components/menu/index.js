import React, { Children } from 'react';
import styled from 'styled-components';

const Menu = function({ children }) {
  const StyledNav = styled.nav`
    background-color: #fff;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

    width: 100%;
  `;

  const StyledList = styled.ul`
    margin: 0 auto;
    padding: 0;

    display: flex;
    justify-content: space-between;
    list-style: none;

    max-width: 400px;

    a {
      display: block;
      padding: 0.8rem 0.7rem;

      text-decoration: none;
      text-transform: uppercase;

      font-weight: ${props => props.theme.fonts.weights.bold};
      font-size: 0.844rem;

      color: #ccc;

      transition: color 0.2s ease;

      @media (min-width: 375px) {
        padding: 0.8rem 1.2rem;
      }

      &:hover,
      &.active {
        color: ${props => props.theme.colors.primary};
      }
    }
  `;

  return (
    <header>
      <StyledNav>
        <StyledList>
          {Children.map(children, child => (
            <li key={child.key}>{child}</li>
          ))}
        </StyledList>
      </StyledNav>
    </header>
  );
};

export default Menu;
