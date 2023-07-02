import styled, { css } from 'styled-components'
import { NavItemProps } from '.'

export const NavItemWrapper =
  styled.div <
  NavItemProps >
  `
  ${({ theme, selected }) => css`
    display: flex;
    padding: 0px 12px;
    align-items: center;
    justify-content: center;
    border-bottom: ${selected ? '4px' : '1px'} solid
      ${selected ? theme.colors.black : theme.colors.mediumGray};
    height: 100%;
  `}
`
