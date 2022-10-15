import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) =>
    css`
      width: 100%;
      background-color: ${theme.colors.white};
      padding: 12px 12px 13px 13px;
      display: flex;
      gap: 15px;
      flex-direction: column;
    `
)
