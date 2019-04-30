import styled from 'styled-components';

export const ButtonLink = styled.button`
  height: 60px;
  width: 100%;
  border: 0px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-radius: 3px;
  text-transform: uppercase;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.orangeMedium};
  box-shadow: inset 0 -3px 0 0 ${props => props.theme.color.orangeDark}, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: ${props => props.theme.color.orangeDark};
  }
`;
