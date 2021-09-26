import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1024px;
  background-color: #fff;
  height: auto;
`

export const Button = styled.button`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff6c00;
  border-radius: 3px;
  border: none;
  padding: 0 15px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  border-bottom: 3px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
  }
`
