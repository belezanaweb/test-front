import styled from 'styled-components'

interface IInputStyledProps {
  valid: boolean
  empty: boolean
}
export const InputStyled = styled.label<IInputStyledProps>`

  display: block;
  position: relative;
  padding-bottom: 14px;
  & + & {
    margin-top: 9px;
  }

  &.no-margin {
    margin-top: 0;
  }

  .label {
    color: #CCC;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 5px;
    display: block;
  }

  input {
    display: block;
    width: 100%;
    border-radius: 3px;
    background-color: #FFF;
    border: 1px solid ${({valid, empty}) => !valid && !empty ? '#F30' : '#E7E7E7'};
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
    padding: 13px;
    color: #212121;
    transition: all .3s linear;
    outline: none;
    &::placeholder { color: #E0E7EE }
    &:not(:empty) { color: #212121 }
    &:focus { border-color: #A43287; }
  }

  .error {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 12px;
    color: #F30;
    letter-spacing: 0;
    transition: all .3s linear;
    opacity: ${({valid, empty}) => !valid && !empty ? 1 : 0}
  }
`
