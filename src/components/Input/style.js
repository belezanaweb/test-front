import styled from 'styled-components'; // eslint-disable-line import/no-extraneous-dependencies

const Input = styled.div`
  margin-bottom: 25px;
  > div {
    margin-top: 5px;
  }
  label {
    color: #ccc;
    font-size: 12px;
    font-weight: 700;
    margin: 0 0 5px 0;
    display: block;
  }
  input {
    box-sizing: border-box;
    outline: none;
    height: 45px;
    width: 100%;
    padding: 10px 12px;
    border-radius: 3px;
    background-color: #fff;
    font-size: 16px;
    border: 1px solid ${props => (props.error ? 'red' : '#e7e7e7')};
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    &::placeholder {
      color: #e0e7ee;
    }
    &:focus {
      border: 1px solid ${props => (props.error ? 'red' : '#a43287')};
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      box-shadow: none;
    }
  }
`;

export default Input;
