import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 4rem 1fr;
    padding: ${theme.spacings.small};
    grid-gap: 1rem;
    border: 1px solid ${theme.colors.lighterGray};
    border-radius: ${theme.border.radius};
  `}
`

export const Image = styled.img`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 1rem;
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Price = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    text-align: right;
  `}
`
