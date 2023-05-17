import styled from 'styled-components';
import { TabItemProps, TabPanelProps } from './Tabs.types';

export const TabsContainer = styled.div`
`;

export const TabList = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TabNav = styled.div`
  max-width: 490px;
  border-bottom: 1px solid #000;
  display: flex;
  margin: 0 auto;
`;

export const TabItem = styled.div<TabItemProps>`
  padding: 10px 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  .icon {
    background-color: #fff;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(236, 236, 236) 0px 2px 2px 0px;
    border-radius: 50%;
    border: 2px solid transparent;
    margin: 5px auto;
    img {
      background-color: #000;
      width: 25px;
    }
    ${({ isActive }) => isActive &&`
      border: 2px solid #9222DC;
      img {
        background-color: #9222DC;
      }
    `}
  }
`;

export const Tab = styled.div`
  cursor: pointer;
  text-align: center;
`;

export const TabContent = styled.div`
`;

export const TabPanel = styled.div<TabPanelProps>`
  display: none;
  ${({ isActive }) => isActive &&`
    display: block;
  `}
`;