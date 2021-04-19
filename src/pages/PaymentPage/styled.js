import styled from 'styled-components'
import { colors, fonts } from '../../assets/styled/tokens'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 98%;
  height: 279px;
  overflow: auto;
  background-color: ${colors.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  border-radius: 3px;
  margin-top: 5px;
  margin-bottom: 20px;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (max-device-width: 375px) {
    width: 341px;
  }
`

export const StyledLabel = styled.label`
  color: ${colors.silverTextDisable};
  font-size: 12px;
  font-weight: bold;
  font-family: ${fonts.text};
  line-height: 14px;
`
export const StyledInput = styled.input`
  width: 320px;
  height: 45px;
  border: 1px solid ${colors.grayInput};
  border-radius: 3px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding-left: 13px;
  &:focus {
    outline: none;
    border: 1px solid ${colors.magenta};
  }
  ::placeholder {
    color: ${colors.blueCyan};
    letter-spacing: 1.37px;
    font-family: ${fonts.text};
    font-size: 16px;
    font-weight: regular;
    line-height: 19px;
  }
`
export const ValidateInput = styled.input`
  width: 160px;
  height: 45px;
  border: 1px solid ${colors.grayInput};
  border-radius: 3px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding-left: 13px;
  &:focus {
    outline: none;
    border: 1px solid ${colors.magenta};
  }
  ::placeholder {
    color: ${colors.blueCyan};
    letter-spacing: 1.37px;
    font-family: ${fonts.text};
    font-size: 16px;
    font-weight: regular;
    line-height: 19px;
  }
`
export const CvvInput = styled.input`
  width: 140px;
  height: 45px;
  border: 1px solid ${colors.grayInput};
  border-radius: 3px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding-left: 13px;
  &:focus {
    outline: none;
    border: 1px solid ${colors.magenta};
  }
  ::placeholder {
    color: ${colors.blueCyan};
    letter-spacing: 1.37px;
    font-family: ${fonts.text};
    font-size: 16px;
    font-weight: regular;
    line-height: 19px;
  }
`
export const InputContainer = styled.div`
  text-align: left;

  @media screen and (min-device-width: 375px) {
    display: flex;
    flex-direction: column;
  }
`
export const ValidateCvvContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 341px;
`

export const ButtonDisable = styled.button`
  display: none;
`
