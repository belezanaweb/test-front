import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 1.25rem;

  input {
    border: 1px solid #e7e7e7;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 12px;
    border-radius: var(--border-radius);
    background-color: #fff;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    ${({ error }) => error && 'border: 1px solid #F30;'}
  }

  input:focus,
  input:hover {
    border: 1px solid #a43287;
  }

  input::placeholder {
    color: #e0e7ee;
  }

  label {
    display: block;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 14px;
    padding-bottom: 0.313rem;
    color: var(--text);
  }

  p {
    color: #f30;
    font-size: 0.75rem;
    margin-top: 3px;
  }
`
