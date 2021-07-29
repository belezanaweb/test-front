import styled from 'styled-components'

export const Styles = styled.div`
  input {
    display: block;
    width: 315px;
    height: 45px;
    border: 1px solid #e7e7e7;
    border-radius: 3px;
    font-size: 16px;
    line-height: 19px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    margin-top: 5px;
    margin-bottom: 5px;

    &::placeholder {
      color: var(--grey-placeholder);
    }
  }

  label {
    font-weight: 700;
    color: #ccc;
    border-bottom: 20px;
    font-size: 12px;
  }
`

export const FormComtainmer = styled.div`
  display: flex;
  input {
    border: 1px solid #e7e7e7;
    border-radius: 3px;
    font-size: 16px;
    line-height: 19px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    margin-top: 5px;
    margin-bottom: 5px;
  }
`

export const FieldContainer = styled.div`
  input {
    width: 160px;
    height: 45px;
  }

  label {
    font-weight: 700;
    color: #ccc;
    border-bottom: 20px;
    font-size: 12px;
  }
`

export const FormInput2 = styled.div`
  input {
    width: 130px;
    height: 45px;
  }

  label {
    font-weight: 700;
    color: #ccc;
    border-bottom: 20px;
    font-size: 12px;
  }
`
