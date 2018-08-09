import styled from 'styled-components';

export const Form = styled.div`
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  background-color: #FFF;
  padding: 12px;
  margin-bottom: 20px;
`;

export const Input = styled.div`
  margin-bottom: 25px;
  max-width: 100%;
  width: 100%;
  display: block;

  ${({ small }) =>
    small &&
    `
    max-width: 140px;
    display: inline-block;
    margin: 0 0 25px 0;
    float: right;
    `}
  ${({ medium }) =>
    medium &&
    `
    float: left;
    max-width: 160px;
    display: inline-block;
    margin: 0 0 25px 0;
  `}

  label {
    color: #CCC;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    display: block;
  }

  input {
    background-color: #FFF;
    border: 1px solid #E7E7E7;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
    height: 45px;
    width: 100%;
    display: block;
    margin-top: 5px;
    color: #E0E7EE;
    padding-left: 13px;
  }
`;

export const Clear = styled.div`
  display: block;
  clear: both;
`
