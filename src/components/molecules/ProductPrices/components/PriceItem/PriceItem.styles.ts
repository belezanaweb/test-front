import styled, { css } from 'styled-components'

interface ContainerVariant {
  isTotal?: boolean;
  isDiscount?: boolean;
}

export const Container =
  styled.div <
  ContainerVariant >
  (({ theme, isTotal, isDiscount }) =>
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      font-weight: ${isTotal ? 'bold' : 'normal'};
      color: ${isDiscount ? theme.colors.primary : theme.colors.black};
      text-transform: uppercase;
      margin: ${isTotal ? '16px 0 0 0' : '0 0 8px 0'};
      font-size: 14px;
    `)

export const PriceDescription = styled.div`
  text-align: start;
`

export const PriceValue = styled.div`
  text-align: end;
`
