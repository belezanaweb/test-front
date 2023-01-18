import React from 'react';
import styled from 'styled-components';


const Button: React.FC = ({ children }) => {
  return (
    <ButtonUI>
        { children }
    </ButtonUI>
  );
};

const ButtonUI = styled.button`
    height: 60px;
    width: 100%;
    border-radius: 3px;
    background-color: #FF6C00;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
    border: 0;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-align: center;
    padding: 0 10px;
    &:hover {
        background-color: #D45A00;
    }
`;

export default Button;