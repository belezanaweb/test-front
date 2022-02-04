import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const Input = styled.input`
  width: 320px;
  height: 45px;
  padding: 14px 88px 12px 13px;
  border: 1px solid ${colors.input.border.normal};
  border-radius: 3px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.input.text.normal};

  &:focus {
    border-color: ${colors.input.border.focus};
    color: ${colors.input.text.focus};
  }
`
