import styled from 'styled-components';

export interface WrapperProps {
  align?: 'start' | 'center' | 'end',
};

export const Wrapper = styled.div<WrapperProps>`
  margin: 20px 8px;

  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align};

  background-color: ${(props) => props.theme.template.content};
  border-radius: ${(props) => props.theme.border.radius};
  border: ${(props) => props.theme.border.size} solid ${(props) => props.theme.border.color};
`;
