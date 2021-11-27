import styled, { css } from 'styled-components'
import { ItemProps } from '.'

type WrapperProps = Pick<ItemProps, 'status'>

const wrapperModifier = {
  true: {
    color: '#FF7800'
  },
  false: {
    color: '#cccccc'
  }
}

// prettier-ignore
export const Wrapper = styled.span<WrapperProps>`
   ${({ theme, status }) => css`
    font-size: ${theme.font.size.font13};
    text-transform: uppercase;
    line-height: ${theme.font.lineHeight.lh16};
    font-weight: ${theme.font.weight.bold};
    {${status === true ? wrapperModifier["true"] : wrapperModifier["false"]}
  `}
`
