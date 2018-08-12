import styled from 'styled-components'

export const ButtonStyle = styled.button`
  height: 60px;
  width: 100%;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  p {
    height: 24px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
    background-color: #d45a00;
  }
`
