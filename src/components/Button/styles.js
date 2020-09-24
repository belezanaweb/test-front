import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 3.75rem;

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  box-shadow: inset 0 -0.188rem 0 0 ${(props) => props.theme.colors.primaryHover},
    0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);
  border-radius: 0.188rem;
  border: 0;

  cursor: pointer;

  font-family: ${(props) => props.theme.fonts.primary.family};
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.fonts.weights.bold};

  line-height: 3.75rem;
  text-align: center;
  text-transform: uppercase;
  transition: opacity 0.2 ease-out, background-color 0.2s ease;

  display: block;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }

  &[disabled] {
    background-color: ${(props) => props.theme.colors.primaryHover};
    opacity: 0.5;
    cursor: text;
  }
`;
