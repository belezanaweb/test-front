import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.xsmall};
    padding: 0.875rem;
    border: 1px solid ${theme.colors.mediumGray};
    border-radius: ${theme.border.radius};
  `}
`

export const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
`

interface TextProps {
  isDiscont?: boolean
  isTotal?: boolean
}

const textModifiers = {
  discont: (theme: DefaultTheme) => css`
    color: ${theme.colors.orange};
  `,
  total: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
  `
}

export const Text = styled.p<TextProps>`
  ${({ theme, isDiscont, isTotal }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    ${isDiscont && textModifiers.discont(theme)}
    ${isTotal && textModifiers.total(theme)}
  `}
`
