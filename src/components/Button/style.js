import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 60px;
  padding-top: 8px;
  border: none;
  border-bottom: ${(props) => `${props.disabled ? '3px solid #ccc' : '3px solid #d45a00'}`};
  background-color: ${(props) => `${props.disabled ? '#ccc' : '#ff6c00'}`};
  margin-top: 20px;
  border-radius: 3px;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => `${props.disabled ? '#ccc' : '#d45a00'}`};
  }
`
