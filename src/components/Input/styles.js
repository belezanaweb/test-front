import styled, { css } from 'styled-components'

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: #ccc;
  font-size: 12px;
  font-weight: bold;
`

export const StyledInput = styled.input`
  width: 100%;
  border: solid 1px #e7e7e7;
  border-radius: 3px;
  border-radius: 3px;
  padding: 14px 13px 12px;
  margin-top: 5px;

  color: #e0e7ee;
  font-size: 16px;

  ::placeholder {
    color: #e0e7ee;
    font-size: 16px;
    letter-spacing: 1.5px;
  }

  &:focus {
    border-color: #a43287;
    color: #212121;
  }

  ${(props) =>
    props.error &&
    css`
      border-color: #f30;
    `}
`
export const StyledError = styled.p`
  color: #f30;
  font-size: 12px;
  font-weight: lighter;
  margin: 3px;
`
