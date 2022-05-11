import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 0.8fr 1fr 1fr;
    box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
    background: ${theme.colors.white};
    ${media.greaterThan('medium')`
      display: flex;
      flex-direction: column;
      border: 0;
      grid-gap: 0.3rem;
      padding: 0.5rem;
      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
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
    padding: ${theme.spacings.small} 0;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    transition: color, ${theme.transition.default};
    &:hover {
      color: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;
    `}

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small} 1rem;
    `}

    ${!isActive && linkModifiers.default(theme)};
    ${isActive && linkModifiers.active(theme)}
  `}
`
