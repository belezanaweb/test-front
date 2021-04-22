import styled, { css } from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #cccccc;
  padding: 16px;
  width: 100%;
  border-color: #e0e7ee;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      input {
        font-weight: 500;
      }
      border-color: #f30;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      input {
        font-weight: 500;
      }
      border-color: #a43287;
    `}
  ${({ isFilled }) =>
    isFilled &&
    css`
      input {
        font-weight: 500;
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      background: #e1e1e1;
      cursor: not-allowed;
    `}

    ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #e0e7ee;
    }

    ${({ disabled }) =>
      disabled &&
      css`
        cursor: not-allowed;
      `}
    ${({ width }) =>
      width &&
      css`
        width: ${width};
      `}
  }
  svg {
    margin-right: 16px;
  }
`

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;
  color: #f30;

  &::before {
    border-color: #c53030 transparent;
  }

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
