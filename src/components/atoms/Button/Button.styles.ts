import styled, { css } from 'styled-components'

export const Button = styled.button(
  ({ theme }) =>
    css`
      width: 100%;
      height: 60px;
      background-color: ${theme.button.enable};
      color: ${theme.colors.white};
      text-transform: uppercase;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.5px;
      font-weight: bold;
      margin-top: 20px;
      box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      &:disabled {
        background-color: #D45A00;
      }
    `
)
