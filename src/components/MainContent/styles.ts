import styled, { css } from 'styled-components'
import { MainContentProps } from '.'

type wrapperProps = Pick<MainContentProps, 'height'>

export const Content =
  styled.div <
  wrapperProps >
  `
  ${({ theme, height }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 29px;
    border: ${theme.border.size} solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    width: 96%;
    background: ${theme.colors.white};
    padding: ${theme.spacings.large};
    height: ${height ? height : 'calc(100vh - 240px - 40px - 40px)'};
    @media screen and (min-width: 768px) {
      grid-column-start: 2;
      grid-column-end: 3;
      height: ${height ? height : 'calc(100vh - 40px - 40px)'};
      width: 100%;
    }
  `}
`
