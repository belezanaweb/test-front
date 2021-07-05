import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 60px;

  border: 0;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  font-size: 1.42rem;
  line-height: 24px;
  color: #fff;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #d45a00;
  }

  &:disabled {
    background: #ccc;
    box-shadow: inset 0 -3px 0 0 #333, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;
