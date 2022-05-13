import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Icon = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.black};
    position: relative;
    display: flex;
    align-items: center;
    width: 2rem;
    z-index: ${theme.layers.alwaysOnTop};
    ${media.lessThan('medium')`
      padding-right: 0rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    grid-gap: 0.3rem;
    padding: 0.5rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
    right: 2rem;
    min-width: 11rem;
    z-index: ${theme.layers.alwaysOnTop};
    button:not(:last-child) {
      border-bottom: 0.05rem solid ${theme.colors.lightGray};
    }
    ${media.lessThan('medium')`
      top: -14rem;
      right: -4.8rem;
    `}
  `}
`

type WrapperProps = {
  isOpen?: boolean
}
const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}
export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    /* width: max-content; */
    ${Content} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`
export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`
export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.mediumGray};
    background-color: transparent;
    border: 0;
    text-align: left;
    padding: 0.4rem 2rem 0.4rem 0px;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    transition: color, ${theme.transition.default};
    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`
export const CloseButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    text-decoration: underline;
    background-color: transparent;
    border: 0;
    color: ${theme.colors.primary};
    text-align: left;
  `}
`
