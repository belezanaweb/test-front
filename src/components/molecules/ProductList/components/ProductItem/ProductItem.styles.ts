import styled, { css } from 'styled-components'

export const Box = styled.div(
  ({ theme }) =>
    css`
      border: solid 1px ${theme.colors.lightBlack};
      width: 100%;
      border-radius: 3px;
      display: grid;
      grid-template-columns: 1fr 3fr;
    `
)

export const Details = styled.div`
  display: grid;
  grid-template-rows: 5fr 2fr;
  height: 100%;
`

export const ProductImage = styled.img`
  width: 65px;
  height: 65px;
  margin: 11px 0 14px 10px;
`

export const ProductDescription = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 13px;
    line-height: 16px;
    margin: 12px 10px 0 0;
  `
)

export const ProductPrice = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
    text-align: end;
    padding: 0 14px 6px 0;
  `
)
