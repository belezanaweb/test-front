import styled from 'styled-components';

const ButtonStyled = styled.button`
  margin: ${props => (props.center ? '0 auto' : '')};
  border-radius: 3px;
  display: ${props => (props.center ? 'flex' : 'initial')};
  padding: 18px 20px;
  border: 0;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  background-color: #ff6c00;
  outline: none;
  font-weight: bold;
  text-align: center;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  color: white;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: #d45a00;
    box-shadow: none;
  }
  &:disabled {
    opacity: ${props => (props.disabled ? '0.5' : '1')};
    &:hover {
      background-color: #ff6c00;
      box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default ButtonStyled;
