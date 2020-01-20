import styled from 'styled-components'

export const Button = styled.button`
  width: 341px;
  height: 60px;
  /* background: ${props => props.disabled ? 'red' : '#ff6c00'}; */
  background: #ff6c00;
  border-radius: 4px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  display: inline-block;
  margin-top: 20px;
  box-shadow: 0 3px 0 #d45a00, 0 5px 40px rgba(0, 0, 0, 0.35);
  -o-transition: -o-box-shadow 0.1s ease-in-out;
  transition: background 0.05s ease-in-out;
  color: #fff;
  margin-bottom: 80px;

  &:hover {
    background: #d45a00;
  }

  .disabled {
    background: #999 !important;
    color: #d8d8d8;
    box-shadow: 0 3px 0 #999, 0 5px 40px rgba(0,0,0,0.35);
  }
`
