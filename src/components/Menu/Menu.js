import React, { Children } from 'react';

import { StyledHeader, StyledNav, StyledLogo, StyledList } from './styles';

const Menu = ({ children }) => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo>Beleza na Web</StyledLogo>
        <StyledList>
          {Children.map(children, (child) => (
            <li key={child.key}>{child}</li>
          ))}
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Menu;
