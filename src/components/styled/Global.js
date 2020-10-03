import styled, { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    background: #EEE;
  }
`

export const Container = styled.div`
  padding: 10px;
  max-width: 960px;
  margin: auto;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 360px;
  height: 60px;
  background: #FF6C00;
  box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
  border: none;
  border-radius: 3px;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;

  &:hover{
    background: #D45A00;
  }

  @media(min-width: 769px){
    padding: 0 16px;
  }
`
