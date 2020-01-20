import styled from 'styled-components'

export const Input = styled.input`
  color: #212121;
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 3px;
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(255, 255, 255, 0.02) 50%
  );
  background-image: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(255, 255, 255, 0.02) 50%
  );
  background-image: linear-gradient(top, rgba(0, 0, 0, 0.02) 0%, rgba(255, 255, 255, 0.02) 50%);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

  ::placeholder {
    color: #e0e7ee;
  }

  &:focus {
    border: 1px solid #a43287 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
  }
`
