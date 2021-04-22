import styled, { css } from 'styled-components'

export const Container = styled.div`
  input {
    padding: 16px;
    border-radius: 10px;
    border: 2px solid #e7e7e7;
    background: transparent;
    color: #212122;

    ${(props) =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #e0e7ee;
    }
  }
`

export const Error = styled.div`
  color: #c53030;
  margin-bottom: 10px;
`
