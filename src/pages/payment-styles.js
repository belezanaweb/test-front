import styled from 'styled-components';

export const ContainerForm = styled.div``;

export const Label = styled.label`
  display: flex;
  margin-bottom: 15px;
  flex-direction: column;

  p {
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.theme.color.grayMedium};
  }
`;

export const ErrorText = styled.span`
  color: #F30;
  font-size: 12px;
  margin-top: -6px;
  margin-left: 2px;
  font-weight: normal;
`;

export const Input = styled.input`
  outline: 0;
  height: 45px;
  font-size: 16px;
  border-radius: 3px;
  padding: 14px 13px;
  margin: 5px 0 10px;
  border: 1px solid #E7E7E7;
  color: ${props => props.theme.color.black};
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);


  &:focus {
    border-color: #A43287;
  }

  /*
  &:invalid {
    border-color: #F30;
  }
  */

  &::placeholder {
    color: #E0E7EE;
  }

  /* Hides the spin-button in type number */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }
`;

export const DataCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Complement = styled.div`
  display: flex;

  ${Label} {
    width: 50%;
    margin-bottom: 2px;

    &:last-child {
      width: 40%;
      margin-left: 10%;
    }
  }
`;
