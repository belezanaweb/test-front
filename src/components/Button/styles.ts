import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    cursor: pointer;
    color: ${theme.colors.white};
    border: 0;
    box-shadow: 0 0.2rem ${theme.colors.secondary},
      0 0 0.25rem ${theme.colors.darkGrey};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
    text-decoration: none;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &:focus {
      outline: 1px dashed;
    }

    &:hover {
      box-shadow: 0 0.2rem ${theme.colors.secondary};
      background: ${theme.colors.secondary};
    }
  `}
`
