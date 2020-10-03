import styled from 'styled-components';

export const Tabs = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding: 12px;
  background: white;
`;

export const Tab = styled.li`
  list-style: none;
  font-weight: bold;
  font-size: 13px;
  color: ${props => props.active ? '#FF7800' : '#CCC'};
  line-height: 16px;
  padding: 0 12px;
  text-transform: uppercase;
`