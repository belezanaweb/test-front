import styled, { css } from 'styled-components'

export const ContainerProducts = styled.section(
  ({ theme }) => css`
    margin: 0 ${theme.spacing.SMALL};
    background-color: ${theme.colors.WHITE};
    border-radius: ${theme.borderRadius.SMALL};
    box-shadow: 0px 2px 4px 2px rgb(0 0 0 / 10%);
    ul {
      padding: ${theme.spacing.SMALL};
      li {
        margin-bottom: ${theme.spacing.SMALL};
        border: solid 1px ${theme.colors.SUBLIME_GREY};
        padding: 10px;
        overflow: hidden;
        min-height: 90px;
        img {
          float: left;
          margin-right: 15px;
        }
        p {
          font-size: ${theme.fontSize.SMALL};
        }
        strong {
          float: right;
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  `
)

export const ContainerCheckoutInfo = styled.section(
  ({ theme }) => css`
    margin: ${theme.spacing.SMALL};
    border-radius: ${theme.borderRadius.SMALL};
    border: solid 1px ${theme.colors.GREY};
    padding: ${theme.spacing.SMALL};
    ul {
      li {
        display: flex;
        justify-content: space-between;
        font-size: ${theme.fontSize.MEDIUM};
        text-transform: uppercase;
        margin-bottom: 5px;
        color: ${theme.colors.DARK};
        strong {
          font-weight: 400;
        }
      }
      li:nth-child(3) {
        color: ${theme.colors.LIGHT_ORANGE};
      }
      li:nth-child(4) {
        font-weight: bold;
        strong {
          font-weight: bold;
        }
      }
    }
  `
)
