import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 60px;
  padding-top: 8px;
  border: none;
  border-bottom: ${(props) => `${props.disabled ? '3px solid' : '3px solid'}`};
  border-color: ${(props) =>
    `${props.disabled ? props.theme.colors.lightGray : props.theme.colors.orange}`};
  background-color: ${(props) =>
    `${props.disabled ? props.theme.colors.lightGray : props.theme.colors.orange}`};
  margin-top: 20px;
  border-radius: ${(props) => props.theme.borderRadius};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fonts.button};
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      `${props.disabled ? props.theme.colors.lightGray : props.theme.colors.darkOrange}`};
  }
`
