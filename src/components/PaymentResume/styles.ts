import styled, { css } from 'styled-components'

export const ContentWrap = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 28px 20px;
    gap: ${theme.spacings.large};
  `}
`

export const ResumeWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.medium};
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`
