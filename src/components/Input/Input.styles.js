import styled from 'styled-components'
import MaskedInput from 'react-text-mask'

export const InputGroup = styled.div`
  display: grid;
  grid-gap: 5px;
`

export const InputErrorMessage = styled.div`
  display: none;
  margin-top: 3px;
  color: #f30;
  font-size: 12px;
  line-height: 1.166666667;
`

export const InputField = styled(MaskedInput)`
  appearance: none;
  height: 45px;
  padding: 13px;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  background-color: #fff;
  font-size: 16px;
  line-height: 1.1875;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  ::placeholder {
    color: #e0e7ee;
  }

  :focus {
    border-color: #a43287;
  }

  :invalid:not(:placeholder-shown) {
    border-color: #f30;

    + ${InputErrorMessage} {
      display: block;
    }
  }
`

export const InputLabel = styled.label`
  display: block;
  margin-left: 2px;
  color: #ccc;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.16666666666667;
`
