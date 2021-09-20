import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainSubContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const TitleCartStyled = styled.h4`
  font-size: 14px;
  color: #999;
  margin-left: 10px;
  margin-right: 10px;
  text-transform: uppercase;
  font-weight: bold;
`

export const Box = styled.div`
  background-color: white;
  margin: 5px 10px;
  padding: 5px 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
  border-radius: 3px;
`

export const DivInputs = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`

export const LabelInput = styled.label`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  font-weight: bold;
  color: #ccc;
  height: 14px;
  line-height: 14px;
`

export const InputForm = styled.input`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
  color: #212122;
  border-radius: 3px;
  outline: currentcolor none medium;
  box-sizing: border-box;
  height: 45px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: 1px solid #a43287;
  }
`

export const SplitInputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  gap: 10px;
`

export const InsideSplitInputs = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: 45px;
  width: 160px;
`
export const LabelInsideSplitInputs = styled.label`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  font-weight: bold;
  color: #ccc;
`
export const InputsSplit = styled(InputForm)`
  box-sizing: border-box;
  height: 45px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  &:focus {
    outline: 1px solid #a43287;
  }
`

export const Helper = styled.span`
  color: #f30;
  font-size: 12px;
  line-height: 16px;
`

export const ButtonPaymentStyled = styled.button`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 5px 10px;
  padding: 15px;
  border-top: medium none;
  border-right: medium none;
  border-left: medium none;
  border-radius: 3px;
  border-bottom: 4px solid #d45a00;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`
