import styled, { css } from 'styled-components'

export const PageWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background: ${theme.colors.lightGray};
    height: 100%;
    gap: 20px;
  `}
`
