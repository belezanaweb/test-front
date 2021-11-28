import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    max-width: 500px;
    border: 1px solid ${theme.color.border};
    border-radius: ${theme.border.radius};
    padding: 8px;
    margin: 0 auto;
  `}
`

export const Figure = styled.figure`
  img {
    height: 65px;
    width: 65px;
  }
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

export const Description = styled.div`
  ${({ theme }) => css`
    p {
      font-size: ${theme.font.size.font13};
    line-height: ${theme.font.lineHeight.lh16}
    color: ${theme.color.text};
    }
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    margin-top: 12px;

    span {
      font-size: ${theme.font.size.font14};
      line-height: ${theme.font.lineHeight.lh17}
      color: ${theme.color.text};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`
