import React from 'react';
import styled from 'styled-components';
import Menu from './menu';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <TitleUI>{text}</TitleUI>
  );
};

const Container = styled.header`
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding: 12px 16px;
`;

const TitleUI = styled.h1`
    color: #999;
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    line-height: 17px;
    margin: 0 0 9px 11px;
`;
export default Title;