import styled, { css } from 'styled-components'

export const Title = styled.h1(
  ({ theme }) =>
    css`
      text-transform: uppercase;
      font-weight: bold;
      color: ${theme.colors.gray};
      padding: 0 0 5px 5px;
      font-size: 14px;
      line-height: 17px;
    `
)
