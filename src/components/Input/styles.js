import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: grid;
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  margin: ${({ margin }) => margin};

  label {
    font-size: 0.75rem;
    font-weight: bold;
    color: VAR(--grey-text);

    margin-top: 0.31rem;
  }

  input {
    max-width: ${({ maxWidth }) => maxWidth || '100%'};
    border: 1px solid var(--grey-text);
    padding: 0.75rem 0.81rem;

    border-radius: 0.18rem;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

    &::placeholder {
      color: var(--grey-placeholder);
    }
  }
`
