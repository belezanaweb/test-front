import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
    padding: ${theme.spacings.regular};
    border-radius: ${theme.border.radius};
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    padding-left: ${theme.spacings.small};
    margin-bottom: 0.3rem;
  `}
`
