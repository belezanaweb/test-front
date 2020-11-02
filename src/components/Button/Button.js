import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  width: 100%;
  min-height: 60px;
  border: 0;
  border-radius: 3px;
  background-color: #ff6c00;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  :hover,
  :active {
    background-color: #d45a00;
    box-shadow: none;
  }

  :disabled {
    background-color: #ccc;
    box-shadow: none;
  }
`
