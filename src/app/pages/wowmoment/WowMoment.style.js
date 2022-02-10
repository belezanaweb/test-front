import styled, { css } from 'styled-components'

export const ContainerWowMomentText = styled.section(
  ({ theme }) => css`
    display: flex;
    width: 70%;
    flex-direction: column;
    margin: ${theme.spacing.SMALL} auto;
    align-items: center;
    h2 {
      color: ${theme.colors.LIGHT_ORANGE};
      font-size: ${theme.fontSize.MEDIUM};
      text-transform: uppercase;
    }
    img {
      margin-bottom: 10px;
    }
  `
)
