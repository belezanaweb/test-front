import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width && props.width}%;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  input {
    height: 45px;
    padding: 14px;
    margin-bottom: 4px;

    font-size: 1rem;
    color: #212121;

    border: 1px solid ${props => (props.hasError ? '#f30' : '#e7e7e7')};
    border-radius: 4px;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.04);

    transition: all 0.2s linear;

    &::placeholder {
      color: #e0e7ee;
    }

    &:focus {
      outline: none;
      border: 1px solid ${props => (props.hasError ? '#f30' : '#a43287')};
    }
  }
`

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #ccc;
`

export const Error = styled.span`
  font-size: 0.75rem;
  color: #f30;
`
