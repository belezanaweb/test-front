import styled from 'styled-components'

const Text = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
  }
`

const ButtonContainer = styled.button`
  width: 100%;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 18px;
  margin-bottom: 12px;
  border: none;
  outline: none;
  transition: 0.3s background-color;
  :hover {
    cursor: pointer;
    background-color: #d45a00;
  }
  :disabled {
    ${Text} {
      cursor: unset;
    }
    background-color: #ccc;
    box-shadow: none;
    cursor: unset;
  }
`

export { ButtonContainer, Text }
