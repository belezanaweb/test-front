import styled, { css } from 'styled-components'

interface ImageVariant {
  sizeType: string;
}
interface GridVariant {
  showPrice: boolean;
}

export const Box =
  styled.div <
  ImageVariant >
  (({ theme, sizeType }) =>
    css`
      border: solid 1px ${theme.colors.lightBlack};
      width: 100%;
      border-radius: 3px;
      display: grid;
      grid-template-columns: ${sizeType === 'big' ? '1fr 3fr' : '1fr 4fr'};
    `)

export const Details =
  styled.div <
  GridVariant >
  (({ showPrice }) =>
    css`
      display: grid;
      grid-template-rows: ${showPrice ? '5fr 2fr' : '1fr'};
      height: 100%;
    `)

export const ProductImage =
  styled.img <
  ImageVariant >
  (({ sizeType }) => `
  
  width: ${sizeType === 'big' ? '65px' : '42px'};
  height: ${sizeType === 'big' ? '65px' : '42px'};
  margin:  ${sizeType === 'big' ? '11px 0 14px 10px' : '11px 0 11px 11px'}; ;
`)

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
