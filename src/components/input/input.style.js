import styled from 'styled-components'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  position: relative;
  ${(props) => (props.flexExpand ? 'flex: 1;' : '')}
  ${(props) => (props.minWidth ? `min-width: ${props.minWidth};` : '')}
`

const InputLabel = styled.label`
  color: #ccc;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  margin-bottom: 5px;
`

const InputBox = styled.input`
  box-sizing: border-box;
  height: 45px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid ${(props) => (props.isInvalid ? '#F30' : '#e7e7e7')};
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  color: #e0e7ee;
  font-size: 16px;
  line-height: 19px;
  outline: none;
  padding: 13px;
  :focus {
    color: #212121;
    border: 1px solid #a43287;
  }
  ::placeholder {
    color: #e0e7ee;
  }
`

const InputErrorMessage = styled.label`
  color: #f30;
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  bottom: -17px;
`

export { InputContainer, InputLabel, InputBox, InputErrorMessage }
