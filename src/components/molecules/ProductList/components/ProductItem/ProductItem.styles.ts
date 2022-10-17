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
      border-radius: ${theme.borders.radius};
      display: grid;
      grid-template-columns: ${sizeType === 'big' ? '1fr 3fr' : '1fr 4fr'};

      @media (min-width: 768px) {
        width: 33%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 13px;
      }
    `)

export const Details =
  styled.div <
  GridVariant >
  (({ showPrice }) =>
    css`
      display: grid;
      grid-template-rows: ${showPrice ? '5fr 3fr' : '1fr'};
      height: 100%;
    `)

export const ProductImage =
  styled.img <
  ImageVariant >
  (({ sizeType }) => css`
    @media (min-width: 768px) {
      width: ${sizeType === 'big' ? '130px' : '84px'};
    }
    width: ${sizeType === 'big' ? '65px' : '42px'};
    height: auto;
    margin: ${sizeType === 'big' ? '11px 0 14px 10px' : '11px 0 11px 11px'}; ;
  `)

export const ProductDescription = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 13px;
    line-height: 16px;
    margin: 12px 10px 0 0;
    @media (min-width: 768px) {
      text-align: center;
      min-height: 50px;
    }
  `
)

export const ProductPrice = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
    text-align: end;
    padding: 10px 14px 6px 0;
  `
)
