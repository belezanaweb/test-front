import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding: 12px;

  li {

    button {
      border: none;
      background: transparent;
      text-transform: uppercase;
      color: #CCC;
      font-family: "Helvetica Neue", sans-serif;
      font-size: 13px;
      font-weight: 700;
      line-height: 16px;
      text-align: center;
    }
  }
`;
