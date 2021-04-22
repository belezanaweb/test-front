import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

const types = (selectedType) => {
  const type = {
    inputDefaultValueColor: css`
      color: ${theme.mainColor};
    `,
    inputLabel: css`
      color: #ccc;
      font-weight: 700;
      line-height: 2;
      font-size: 0.8rem;
    `,
    cardTextLabel: css`
      color: #999;
      font-weight: 700;
      margin-left: 1rem;
      line-height: 1.5em;
    `,
    cartPriceValue: css`
      color: ${theme.textTitleColor};
      line-height: 1.5em;
      text-align: ${((props) => props.align) ?? 'center'};
      font-size: ${((props) => props.size) ?? '2rem'};
    `,
    cartPriceDiscount: css`
      color: ${theme.mainColor};
      line-height: 1.5em;
    `,
    successText: css`
      color: ${theme.mainColor};
      line-height: 1.5em;
      font-weight: 700;
    `,
    cartPriceTotal: css`
      color: ${theme.textTitleColor};
      line-height: 2.5em;
      font-weight: 700;
      text-align: ${((props) => props.align) ?? 'center'};
      font-size: ${((props) => props.size) ?? '2rem'};
    `
  }

  return type[selectedType]
}

export const Container = styled.p`
  ${(props) => props.type && types(props.type)}
`
