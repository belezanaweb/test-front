import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  text-align: center;
  padding: 15px;
  margin: 20px;

  h1 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  a {
    padding: 3px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    background: #ff6c00;
    height: 20px;
    width: 50px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;
