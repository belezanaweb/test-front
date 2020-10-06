import styled from 'styled-components'

export const ButtonStyled = styled.button`
  font-weight: bold;
  outline: none !important;
  padding: 0.5rem 0.6rem;
  box-shadow: none;
  display: block;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  font-size: 1.54rem !important;
  text-transform: uppercase;
  &.primary {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    color: #fff;

    &:hover {
      border-color: ${(props) => props.theme.colors.primary2};

      background-color: ${(props) => props.theme.colors.primary2};
      box-shadow: none;
    }
    &:focus {
      box-shadow: none !important;
    }
  }

  &:focus {
    box-shadow: none !important;
  }
`
