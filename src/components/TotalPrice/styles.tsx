import styled, { css } from 'styled-components'
import { TotalPriceProps } from '.'

type WrapperProps = Pick<TotalPriceProps, 'isTotal' | 'isNegative'>

const wrapperModifier = {
  total: {
    fontWeight: 'bold'
  },
  negative: {
    color: '#FF7800'
  }
}

// prettier-ignore
export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, isNegative, isTotal }) => css`
    display: flex;
    justify-content: space-between;
    max-width: 100%;

    span {
      font-size: ${theme.font.size.font14};
      line-height: ${theme.font.lineHeight.lh17};
      color: ${theme.color.text};
      text-transform: uppercase;

      ${isNegative && wrapperModifier["negative"]}
      ${isTotal && wrapperModifier["total"]}
    }
  `}
`
