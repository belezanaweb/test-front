import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 341px;
  height: 279px;
  overflow: auto;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  border-radius: 3px;
  margin-top: 5px;
  margin-bottom: 20px;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`

export const StyledLabel = styled.label`
  color: #ccc;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 14px;
`
export const StyledInput = styled.input`
  width: 320px;
  height: 45px;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding-left: 13px;
  &:focus {
    outline: none;
    border: 1px solid #a43287;
  }
  ::placeholder {
    color: #e0e7ee;
    letter-spacing: 1.37px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: regular;
    line-height: 19px;
  }
`
export const ValidateInput = styled.input`
  width: 160px;
  height: 45px;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding-left: 13px;
  &:focus {
    outline: none;
    border: 1px solid #a43287;
  }
  ::placeholder {
    color: #e0e7ee;
    letter-spacing: 1.37px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: regular;
    line-height: 19px;
  }
`
export const CvvInput = styled.input`
  width: 140px;
  height: 45px;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding-left: 13px;
  &:focus {
    outline: none;
    border: 1px solid #a43287;
  }
  ::placeholder {
    color: #e0e7ee;
    letter-spacing: 1.37px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: regular;
    line-height: 19px;
  }
`
export const InputContainer = styled.div`
  text-align: left;
`
export const ValidateCvvContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 341px;
`
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
`
