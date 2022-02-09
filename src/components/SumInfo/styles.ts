import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.2rem;

  border: 1px solid #ccc;
  border-radius: 0.3rem;

  li {
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${(props) => props.theme.types.text};
    text-transform: uppercase;
  }
`;
