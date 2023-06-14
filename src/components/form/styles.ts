import styled from 'styled-components'

export const Container = styled.div`
  * {
    box-sizing: border-box;
  }

  ::placeholder {
    color: #cccccc;
  }

  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;

  label {
    display: inline-block;
    margin-bottom: 0.3rem;
    font-size: 0.875rem;
    line-height: 1rem;
  }

  input {
    display: block;
    width: 100%;
    background: white;
    padding: 0.875rem;
    font-size: 1rem;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }

  .error {
    input {
      border-color: #de1616;

      &:focus {
        outline: 0 none;
        border-color: #de1616;
      }
    }

    span {
      color: #de1616;
      font-size: 0.875rem;
      line-height: 1rem;
    }
  }

  .card-number,
  .name {
    flex: 100%;
  }

  .date {
    width: 100%;
  }
  .expiration,
  .security {
    flex: 1;
  }

  .expiry-inputs {
    display: flex;
  }

  .expiration-security {
    display: flex;
    flex: auto;
    flex-wrap: wrap;
  }

  .card-number,
  .name,
  .expiration-security {
    margin-bottom: 1.25rem;
  }

  .expiry-inputs,
  .date,
  .expiration-security,
  .name,
  .card-number {
    margin-right: 1rem;
  }
`
