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

export const Products = styled.section`
  ${({ theme }) => css`
    background: ${theme.color.white};
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid ${theme.color.border};
    border-radius: ${theme.border.radius};
    padding: 12px;
  `}
`

export const Price = styled.section`
  ${({ theme }) => css`
    margin-top: 16px;
    border: 1px solid ${theme.color.borderDark};
    border-radius: ${theme.border.radius};
    padding: 12px;
  `}
`

export const Button = styled.section`
  margin-top: 16px;
`
