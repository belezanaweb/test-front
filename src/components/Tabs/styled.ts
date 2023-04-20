import styled, { css } from 'styled-components'
import { NavItemProps } from './interfaces'

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin.m0};
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const Nav = styled.ul`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.padding.p0};
  background: ${({ theme }) => theme.color.white};
  margin: ${({ theme }) => theme.margin.m0};
`

export const NavItem = styled.li<NavItemProps>`
  width: 100%;
  list-style: none;
  text-align: center;
  cursor: pointer;
  padding: ${({ theme }) => theme.padding.p4} ${({ theme }) => theme.padding.p8};
  border-bottom: ${({ theme, active }) =>
    active
      ? `${theme.border.width.thick} ${theme.border.style.solid} ${theme.color.black}`
      : `${theme.border.width.thin} ${theme.border.style.solid} ${theme.color.grey}`};

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}
`

export const OutletWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: ${({ theme }) => theme.padding.p10};
  background: ${({ theme }) => theme.color['grey-default']};
`
