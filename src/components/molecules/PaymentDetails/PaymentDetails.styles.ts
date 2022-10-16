import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) =>
    css`
      width: 100%;
      background-color: ${theme.colors.white};
      padding: 12px 12px 13px 13px;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      border-radius: 3px;
    `
)

export const Detail = styled.p(({ theme }) => css`
    font-size: 14px;
    line-height: 17px;
    color: #000;
    text-transform: uppercase;
`)
