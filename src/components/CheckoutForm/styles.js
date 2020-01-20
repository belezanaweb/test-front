import styled from 'styled-components'
import { colors } from '../../styles'
export const FormStyle = styled.section`
  .input-field {
    display: flex;
    flex-flow: column;
    margin-bottom: 30px;
    label {
      font-size: 0.8rem;
      color: ${colors.grey};
      font-weight: bold;
      margin-bottom: 5px;
    }
    input {
      border: none;
      border-radius: 5px;
      box-shadow: inset 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
      padding: 15px 14px;
      &:focus {
        border: 1px solid purple;
        outline: none;
      }
    }
    &--error {
      input {
        border: 1px solid red;
        outline: none;
      }
    }
    ::placeholder {
      color: ${colors.grey};
    }
    .message-error {
      color: red;
      font-size: 0.8rem;
      display: block;
      margin-top: 5px;
    }
  }
`
