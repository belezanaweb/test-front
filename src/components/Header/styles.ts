import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 37px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1100;
  width: 100%;
  nav {
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
  }
`

interface NavLinkProps {
  disabled?: boolean;
}

export const CustomNavLink = styled(NavLink).attrs(({ disabled }: NavLinkProps) => {
  return {
    disabled: disabled || false
  }
})`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors['gray-300']};
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors['gray-300']};
  padding: 0 8px;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  &:hover {
    border-bottom: 4px solid ${(props) => props.theme.colors.black};
  }

  &.active {
    border-bottom: 4px solid ${(props) => props.theme.colors.black};
  }
`
