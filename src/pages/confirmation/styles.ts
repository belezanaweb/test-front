import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.color.background};
    max-width: 100%;
    height: 100vh;
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.container.desktop};
    margin: 0 auto;
    padding: 5px;

    > h2 {
      margin: 8px 12px 5px;
    }
  `}
`

export const BlockContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;

    @media (max-width: ${theme.container.mobile}) {
      display: flex;
      flex-direction: column;
    }
  `}
`

export const ContentInfo = styled.div``

export const Success = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px 0 16px;

  ${({ theme }) => css`
    svg {
      border: 2px solid ${theme.color.orangeText};
      font-size: 40px;
      color: ${theme.color.orangeText};
      border-radius: 50%;
      padding: 5px;
    }
    span {
      font-size: ${theme.font.size.font14};
      color: ${theme.color.orangeText};
      line-height: ${theme.font.lineHeight.lh17};
      font-weight: ${theme.font.weight.bold};
      text-transform: uppercase;
      margin-top: 8px;
    }
  `}
`

export const Payment = styled.section`
  ${({ theme }) => css`
    background: ${theme.color.white};
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.color.border};
    border-radius: ${theme.border.radius};
    padding: 12px;
    margin: 6px 0;

    span {
      color: ${theme.color.textDark};
      font-size: ${theme.font.size.font14};
      line-height: ${theme.font.lineHeight.lh17};
    }
  `}
`

export const Products = styled.section`
  ${({ theme }) => css`
    background: ${theme.color.white};
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid ${theme.color.border};
    border-radius: ${theme.border.radius};
    padding: 12px;
    margin-top: 6px;
  `}
`

export const Price = styled.section`
  ${({ theme }) => css`
    margin-top: 16px;
    border: 1px solid ${theme.color.borderDark};
    border-radius: ${theme.border.radius};
    padding: 12px;

    @media (min-width: ${theme.container.tablet}) {
      margin-top: 24px;
    }
  `}
`

export const Button = styled.section`
  margin-top: 16px;
`
