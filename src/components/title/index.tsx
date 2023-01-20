import React from 'react';
import styled from 'styled-components';
import Menu from './menu';

interface TitleProps {
  children: any; //Todo
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <TitleUI>{children}</TitleUI>
  );
};
const TitleUI = styled.h1`
    color: #999;
    font-size: ${({theme}) => theme.fontSizes.h1};
    font-weight: 700;
    text-align: left;
    line-height: 17px;
    margin: 0 0 9px 11px;
`;
export default Title;