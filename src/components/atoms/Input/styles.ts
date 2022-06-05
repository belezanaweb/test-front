import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .error {
    margin: -0.5rem 0 0.75rem 0;
    color: #ff3300;
    font-size: 0.8rem;
  }

  label {
    font-size: 0.75rem;
    color: #cccccc;
  }
`

export const InputMaskStyled = styled<any>(InputMask)`
  border: 1px solid #cccccc;
  padding: 0.5rem;
  margin: 0.3rem 0.5rem 1rem 0rem;
  border-radius: 3px;
  width: ${(props) => (props.id === 'Validade (mês/ano):' || props.id === 'CVV' ? '85%' : '92%')};

  ::placeholder {
    color: #cccccc;
    opacity: 0.6;
  }
`
