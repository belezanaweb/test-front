import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  margin: ${({ margin }) => margin};

  label {
    font-size: 0.75rem;
    font-weight: bold;
    color: VAR(--grey);

    margin-top: 0.31rem;
  }

  p {
    color: var(--red);
    font-size: 0.75rem;
    margin-top: 0.18rem;
  }

  input {
    max-width: ${({ maxWidth }) => maxWidth || '100%'};
    padding: 0.75rem 0.81rem;
    color: var(--gray-dark);

    border: 1px solid;
    border-color: ${({ error }) => (error ? 'var(--red)' : 'var(--grey)')};

    border-radius: 0.18rem;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

    &::placeholder {
      color: var(--grey-150);
    }

    &:focus {
      outline: var(--purple);
      border-color: var(--purple);
    }
  }
`
