import styled from 'styled-components'

export const Container = styled.header`
  text-transform: uppercase;
  background-color: #fff;
  height: 40px;
  width: 100%;
  align-content: center;
  box-shadow: 0 0 5px #aba8a8;
`;

export const Nav = styled.nav`
  display:flex;
  flex-direction: row;
  height: 100%;
`;

export const Item = styled.li`
  list-style-type: none;
  font-size: 0.8em;
  margin: auto;
  font-family: 'Arial';
  font-weight:bold;

  a{
    text-decoration:none;
    color: ${props => (props.active ? '#fb7939' : '#ccc')};
  }
`;
