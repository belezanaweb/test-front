import styled from 'styled-components'

export const StyledLabel = styled.label`
  margin-bottom: 5px;
  color: #ccc;
  line-height: 14px;
  font-size: 12px;
  font-weight: 700;
`

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 45px;
  padding: 0 10px;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-width: 1px;  
  border-style: solid;
  border-radius: 3px;
  border-color: ${({ invalid }) => invalid ? 'red' : '#E7E7E7' };
  transition: all 0.4s ease;

  &:focus {
    border-color: #A43287;
  }

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: #e0e7ee;
    font-size: 16px;
  }
`

export const StyledInputErrorText = styled.p`
  color: #f30;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  bottom: -19px;
`

export const StyledInputWrapper = styled.div`
  margin-bottom: 25px;
  position: relative;
`