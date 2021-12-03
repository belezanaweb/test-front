import styled from 'styled-components'

export const DivMaskInput = styled.div`
  input {
    width: ${(props) => (props.block ? '100%' : 'auto')};
    padding: 14px 13px;
    border-radius: 3px;
    background-color: #ffffff;
    border: 1px solid ${(props) => (props.error ? '#F30' : '#e7e7e7')};
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    color: #212121;
    &::placeholder {
      color: #e0e7ee;
    }
    &:focus-visible,
    &:focus {
      border: 1px solid #a43287;
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      outline: 0;
    }
  }
`
