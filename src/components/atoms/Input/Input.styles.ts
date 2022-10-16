import styled, { css } from 'styled-components'

interface InputErrorVariant {
  hasError?: boolean;
}

export const Container = styled.div`
  display: block;
  width: 100%;
`

export const Label = styled.label(
  ({ theme }) => css`
    display: block;
    color: ${theme.colors.lightGray};
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-bottom: 5px;
  `
)

export const InputError = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.red};
    font-size: 12px;
    line-height: 14px;
    margin: 3px 0 8px 0;
  `
)

export const Input =
  styled.input <
  InputErrorVariant >
  (({ theme, hasError }) => css`
    width: 100%;
    box-sizing: border-box;
    height: 45px;
    border-radius: 3px;
    background-color: ${theme.colors.white};
    border: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    padding: 14px 13px 12px 14px;
    color: ${theme.colors.black};
    margin-bottom: ${hasError ? '0' : '25px'};
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${hasError ? theme.colors.red : '#e0e7ee'};
    }
    :-ms-input-placeholder {
      color: #e0e7ee;
    }
    &:focus {
      border: solid 1px #a43287;
    }
    &:focus-visible {
      outline: none;
    }
  `)
