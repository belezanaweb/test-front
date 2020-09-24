import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
`;

export const CheckImage = styled.img`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;

  display: inline-block;
  width: 40px;
  height: 40px;
  object-fit: none;
`;

export const Message = styled.span`
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;

  font-weight: ${(props) => props.theme.fonts.weights.bold};
  font-size: 0.875rem;
  margin-top: 0.5rem;

  display: block;
`;
