import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 6.5rem 8rem 9rem;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
    ${media.greaterThan('medium')`
      display: flex;
      flex-direction: column;
      border: 0;
      padding: 0 ${theme.spacings.large};
      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.mediumGray};
  `,
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `
}

type LinkProps = {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.regular} 0;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    transition: color, ${theme.transition.default};
    &:hover {
      color: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;
    `}

    ${!isActive && linkModifiers.default(theme)};
    ${isActive && linkModifiers.active(theme)}
  `}
`
