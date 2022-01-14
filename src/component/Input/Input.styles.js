import InputMask from 'react-input-mask'
import styled from 'styled-components'

const commomStyles = `display: block;
border-radius: 3px;
background-color: #FFF;
border: 1px solid #E7E7E7;
box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
font-size: 16px;
line-height: 19px;
padding: 14px 13px 12px;
width: 100%;

::placeholder{
  color: #E0E7EE;
}

&:focus{
  border: 1px solid #A43287;
}

&:focus-visible{
  outline: none;
}`

export const StyledInputMask = styled(InputMask)`
  ${commomStyles}
}
`

export const StyledInput = styled.input`
  ${commomStyles}
`

export const StyledLabel = styled.label`
  color: #ccc;
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  width: 100%;
`
