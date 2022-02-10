import styled, { css } from 'styled-components'

export const ContainerButton = styled.section(
  ({ theme }) => css`
    margin: ${theme.spacing.SMALL};
    button {
      background-color: ${theme.colors.ORANGE};
      border-radius: ${theme.borderRadius.SMALL};
      cursor: pointer;
      min-height: 60px;
      border: none;
      width: 100%;
      font-size: ${theme.fontSize.BIG};
      text-transform: uppercase;
      color: ${theme.colors.WHITE};
      font-weight: bold;
      box-shadow: inset 0px -3px 0px rgb(0 0 0 / 25%);
      :hover {
        background-color: ${theme.colors.DARK_ORANGE};
      }
    }
  `
)
