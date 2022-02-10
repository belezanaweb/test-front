import styled, { css } from 'styled-components'

export const ContainerAllForm = styled.section(
  ({ theme }) => css`
    margin: 0 ${theme.spacing.SMALL};
    padding-bottom: ${theme.spacing.SMALL};
    background-color: ${theme.colors.WHITE};
    border-radius: ${theme.borderRadius.SMALL};
    box-shadow: 0px 2px 4px 2px rgb(0 0 0 / 10%);
    p {
      font-size: ${theme.fontSize.SMALL};
      color: ${theme.colors.ALERT};
    }
  `
)

export const ContainerSimpleForm = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 15px 15px 15px;
    label {
      font-size: ${theme.fontSize.SMALL};
      color: ${theme.colors.GREY};
      font-weight: bold;
      margin-top: ${theme.spacing.SMALL};
    }

    input {
      height: 45px;
      border-radius: ${theme.borderRadius.SMALL};
      border: solid 1px ${theme.colors.LIGHT_GREY};
      padding: ${theme.spacing.SMALL} 10px;
    }
  `
)

export const ContainerCustomForm = styled.section(
  ({ theme }) => css`
    display: flex;
    padding: 0 ${theme.spacing.SMALL};
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
    }
    label {
      font-size: ${theme.fontSize.SMALL};
      color: ${theme.colors.LIGHT_GREY};
      font-weight: bold;
    }
    input {
      height: 45px;
      border-radius: ${theme.borderRadius.SMALL};
      border: solid 1px #e9e9e9;
      padding: ${theme.spacing.SMALL} 10px;
      width: 150px;
    }
  `
)
