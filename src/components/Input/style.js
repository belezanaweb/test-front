import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const Wrapper = styled.div`
  border-radius: 3px;
  position: relative;

  & > input {
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    border: 1px solid ${colors.input.border.normal};
    border-color: ${({ valid }) => (valid ? colors.input.border.normal : colors.input.error)};
    color: ${colors.input.text.focus};
    font-weight: normal;
    font-size: 16px;
    height: 45px;
    line-height: 19px;
    margin-top: 5px;
    padding: 14px 88px 12px 13px;
    width: 100%;

    &::placeholder {
      color: ${colors.input.placeholder};
      font-size: 16px;
    }

    &:focus {
      color: ${colors.input.text.focus};
      border-color: ${colors.input.border.focus};
    }
  }
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  color: ${colors.input.label};
`

export const ErrorLabel = styled.p`
  color: ${colors.input.error};
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  margin-top: 3px;
`
