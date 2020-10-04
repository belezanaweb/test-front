import styled from 'styled-components';

const Container = styled.div`
  position: sticky;
  top: 0;
  background: white;
  margin: auto;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`

const Tabs = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  max-width: 360px;
  margin: auto;
`;

const Tab = styled.li`
  list-style: none;
  font-weight: bold;
  font-size: 13px;
  color: ${props => props.active ? '#FF7800' : '#CCC'};
  line-height: 16px;
  text-transform: uppercase;
`

export default {
  Container,
  Tabs,
  Tab
}