import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 20px;

  input {
    border: 1px solid #e7e7e7;
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 12px;
    border-radius: 3px;
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
    font-size: 12px;
    line-height: 14px;
    padding-bottom: 0.313rem;
    color: var(--text);
  }

  p {
    color: #f30;
    font-size: 12px;
    margin-top: 3px;
  }
`
