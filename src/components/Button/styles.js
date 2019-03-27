import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Helvetica";

  button{
    height: 60px;
    width: 100%;
    border-radius: 3px;
    background-color: #ff6c00;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
    color: #fff;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    border: 0;

    &:hover{
      background-color: #D45A00;
    }

    &:disabled{
      background-color: #f7caa9;
      box-shadow: inset 0 -3px 0 0 #dab193, 0 2px 4px 0 rgba(0,0,0,0.25);
    }
  }

`
