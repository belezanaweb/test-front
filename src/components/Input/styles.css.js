import styled from 'styled-components'

import colors from '../../utils/colors'

export const Container = styled.div``

export const Label = styled.div`
  color: ${colors.veryLightGrey};
  font-size: 12px;
  font-weight: 500;
`

export const CustomInput = styled.div`
  input {
    width: 100%;
    box-sizing: border-box;
    height: 45px;
    border-radius: 3px;
    background-color: ${colors.white};
    border: 1px solid;
    border-color: ${(props) => (props.error ? colors.inputError : colors.inputBorder)};
    box-shadow: inset 0 1px 2px 0 ${colors.inputShadow};
    margin-top: 5px;
    padding: 15px 0 11px 13px;
    color: ${colors.veryLightGrey};
    font-size: 16px;

    ::placeholder {
      color: ${colors.veryLightGrey};
    }

    &:focus {
      border-color: ${colors.inputFocus};
      outline: none;
      color: ${colors.black};
    }
  }
`

export const Error = styled.div`
  color: ${colors.error};
  font-size: 12px;
  margin-top: 3px;
`
