import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Wrapper = styled.div`
  max-width: 1024px;
  background-color: #fff;
  height: 50px;
`

export const Input = styled(InputMask)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  -webkit-box-shadow: inset 0px 0px 3px 0px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0px 0px 3px 0px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  letter-spacing: 1.3px;
  color: #212122;
  text-transform: uppercase;

  &::placeholder {
    color: #e0e7ee;
    text-transform: capitalize;
  }
`
