import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 0.5rem;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    width: 2.5rem;
  `}
`
