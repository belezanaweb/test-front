import styled, { css } from 'styled-components'
import { paymentResumeProps } from '.'

type wrapperProps = Pick<paymentResumeProps, 'rowStart'>

export const ContentWrap =
  styled.div <
  wrapperProps >
  `
  ${({ theme, rowStart }) => css`
    background: ${theme.colors.white};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 28px 20px;
    gap: ${theme.spacings.large};
    @media screen and (min-width: 768px) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: ${rowStart ? rowStart : '2'};
    }
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
