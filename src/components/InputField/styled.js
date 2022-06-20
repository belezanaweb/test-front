import styled from 'styled-components'
import { colors } from '../../assets/styles/theme'

export const StyledLabel = styled.label`
  margin-bottom: 5px;
  color: ${colors['shadow-grey']};
  line-height: 14px;
  font-size: 12px;
  font-weight: 700;
`

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 45px;
  padding: 0 13px;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${({ invalid }) => (invalid ? colors['input-error'] : colors['input-border'])};
  transition: all 0.4s ease;

  &:focus {
    border-color: ${colors['input-focus']};
  }

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${colors.placeholder};
    font-size: 16px;
    line-height: 19px;
  }
`

export const StyledInputErrorText = styled.p`
  color: ${colors['input-error']};
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  position: absolute;
  bottom: -19px;
`

export const StyledInputWrapper = styled.div`
  margin-bottom: 10px;
  position: relative;
  flex-grow: 1;
`
