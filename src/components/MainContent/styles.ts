import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 29px;
    border: ${theme.border.size} solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    width: 96%;
    background: ${theme.colors.white};
    padding: ${theme.spacings.large};
  `}
`
