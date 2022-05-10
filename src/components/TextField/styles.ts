import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = { error?: boolean }

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    height: 2.813rem;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.regular};
    padding: ${theme.spacings.regular};
    background: transparent;
    margin-top: 0.3rem;
    border: 1px solid ${theme.colors.lightGray};
    border-top: 2.4px solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    box-shadow: inset 2px 3px 8px -6px ${theme.colors.mediumGray};
    outline: none;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.lightBlue};
    }

    &:focus {
      border-top: 0;
      border: 1px solid ${theme.colors.purple};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.large}
        ${theme.colors.lightGray} inset;
      filter: none;
    }
  `}
`
export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.mediumGray};
    font-weight: ${theme.font.bold};
    cursor: pointer;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${Input} {
      border-top: 0;
      border: 1px solid ${theme.colors.lightGray};
      border-color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    ${error && wrapperModifiers.error(theme)}
  `}
`
