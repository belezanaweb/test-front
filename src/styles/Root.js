import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
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
const Loading = styled.div`
  display: block;
  margin: 16px auto;
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #FF7800;
  border-bottom: 4px solid #FF7800;
  border-left: 4px solid #FF7800;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const NotFound = styled.h1`
  text-align: center;
  margin-top: 30px;
`;

const Container = styled.div`
  padding: 10px;
  max-width: 960px;
  margin: auto;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  @media(min-width: 769px){
    flex-direction: row;
    justify-content: space-between;
  }
`

const Title = styled.h1`
 font-size: 14px;
 color: #999;
 margin-bottom: 5px;
 margin-left: 8px;
 line-height: 17px;
 text-transform: uppercase;
`;

const Button = styled.button`
  display: block;
  margin: auto;
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
  text-decoration: none;

  &:hover{
    background: #D45A00;
  }

  &:disabled{
    background: #CCC;
    box-shadow: inset 0 -3px 0 0 #CCC, 0 2px 4px 0 rgba(0,0,0,0.25);
  }

  @media(min-width: 769px){
    padding: 0 16px;
  }
`

export default {
  Global,
  Container,
  NotFound,
  Loading,
  Flex,
  Title,
  Button
}
