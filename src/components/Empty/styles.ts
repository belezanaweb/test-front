import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 0.5rem;
  ${media.lessThan('medium')`
    height: 100vh;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    max-width: 15rem;
    text-align: center;
  `}
`

export const Image = styled.img`
  width: 10rem;
`

export const Button = styled.button`
  ${({ theme }) => css`
    border: 0;
    background-color: transparent;
    color: ${theme.colors.primary};
    text-decoration: underline;
  `}
`
