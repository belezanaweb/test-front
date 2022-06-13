import styled from 'styled-components'

export const Item = styled.li`
  color: ${(props) => `${props.isActive ? '#FF7800' : '#ccc'}`};
  font-size: 0.81rem;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  font-weight: 800;
`
