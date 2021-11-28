import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: 500px;
    height: 60px;
    background: ${theme.color.orangeButton};
    border: 0;
    border-radius: ${theme.border.radius};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 12px;
    transition: background 0.3s;
    box-shadow: 0 2px 0 #d45a00;

    &:hover {
      background: #d45a00;
    }

    @media (max-width: ${theme.container.tablet}) {
      width: 100%;
    }

    span {
      line-height: ${theme.font.lineHeight.lh24};
      font-size: ${theme.font.size.font20};
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-weight: ${theme.font.weight.bold};
      color: ${theme.color.white};
    }
  `}
`
