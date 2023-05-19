import styled from 'styled-components';

import { theme } from '../../styles'
import { TabItemProps, TabPanelProps } from './Tabs.types';
import { ContainerStyled } from '../Container/Container.styled';

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabList = styled(ContainerStyled)`
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  height: 40px;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    background-color: transparent;
    box-shadow: none;
    align-items: center;
    height: auto;
  }
`;

export const TabNav = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 490px;
    justify-content: space-between;
  }
`;

export const TabItem = styled.div<TabItemProps>`
  padding: 10px 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.dark};
  position: relative;
  
  .tab-icon {
    display: none;
  }
  .tab-title {
    color: #878787;
  }

  &::before {
    content: '';
    border-bottom: 3px solid transparent;
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  ${({ $isActive }) => $isActive &&`
    &::before {
      border-color: ${theme.colors.dark};
    }
    .tab-title {
      color: ${theme.colors.dark};
    }
  `}

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border-bottom: 0;
    &:last-child {
      &::before {
        display: none;
      }
    }
    &::before {
      width: 170px;
      border-color: transparent;
      background: ${props => props.theme.colors.gray[100]};
      top: 40px;
      left: 60px;
      bottom: auto;
    }
    .tab-icon {
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
      z-index: 1;
      position: relative;
      img {
        background-color: #878787;
        width: 25px;
      }
    }
    .tab-title {
      font-size: 12px;
    }
    ${({ $done }) => $done &&`
      &::before {
        width: 170px;
        border-color: transparent;
        background: ${theme.colors.secondary};
        top: 40px;
        left: 60px;
        bottom: auto;
      }
      .tab-icon {
        img {
          background-color: ${theme.colors.secondary};
        }
      }
    `}

    ${({ $isActive }) => $isActive &&`
      &::before {
        border-color: transparent;
      }
      .tab-icon {
        border: 2px solid ${theme.colors.primary.main};
        img {
          background-color: ${theme.colors.primary.main};
        }
      }
    `}
  }
`;

export const Tab = styled.div`
  cursor: pointer;
  text-align: center;
`;

export const TabContent = styled.div``;

export const TabPanel = styled.div<TabPanelProps>`
  display: none;
  
  ${({ $isActive }) => $isActive && `
    display: block;
  `}
`
