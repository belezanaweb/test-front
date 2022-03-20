import styled from 'styled-components'

export const ButtoDiv = styled.div``

export const ButtonStyled = styled.button`
  border-radius: 3px;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  height: 60px;
  width: 341px;
  color: #fff;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 18px 12px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  transition-duration: 0.4s;
  :hover {
    background-color: #d45a00;
  }

  @media (max-width: 991px) {
    font-size: 93%;
  }

  @media (min-width: 741px) {
    font-size: 93%;
  }
`
