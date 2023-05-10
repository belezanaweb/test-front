import styled from 'styled-components';
import { Colors } from '_theme/styles/themes';

export interface CustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: Colors,
};

export const Custom = styled.button<CustomProps>`
  background-color: ${(props) => props.theme.colors[props.color].color};
  color: ${(props) => props.theme.colors[props.color].contrast};

  padding: 16px 8px;

  font-family: ${(props) => props.theme.font.family.fromText};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.lg};
  align-items: center;
  text-align: center;

  border-radius: ${(props) => props.theme.border.radius};
	border: none;

  cursor: pointer;
`;
