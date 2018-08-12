import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 18px;

  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;

  background-color: ${props => (props.disabled ? '#d45a00' : '#ff6c00')};
  border: none;
  border-radius: 4px;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s linear;

  &:hover {
    background-color: #d45a00;
  }

  &:focus {
    outline: none;
  }
`
