import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.75rem;
    color: #cccccc;
  }
`

export const InputMaskStyled = styled<any>(InputMask)`
  border: 1px solid #cccccc;
  padding: 0.5rem;
  margin: 0.3rem 0 1rem 0;
  border-radius: 3px;

  ::placeholder {
    color: #cccccc;
    opacity: 0.6;
  }
`
