import styled from 'styled-components'

/* título do input */

export const Label = styled.label`
  width: 320px;
  margin-bottom: 5px;
  color: #ccc;
  letter-spacing: NaNpx;
  line-height: 14px;
  font-size: 12px;
  font-weight: 700;
`

/* retangulo do input */

export const InputContainer = styled.div`
  margin-bottom: 25px;
  border-radius: 3px;
  position: relative;

  & > input {
    border: 1px solid ${({ valid }) => (valid ? '#E7E7E7' : '#F30')};
    transition: all 0.4s ease;
    padding: 14px 13px;
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    height: 45px;
    width: 310px;

    @media (min-width: 500px) {
      width: 511px;
    }

    &::placeholder {
      color: #e0e7ee;
      font-size: 16px;
    }

    &:focus {
      border-color: ${({ valid }) => (valid ? '#A43287' : '#F30')};
    }
  }
`

/* input de erro */

export const InputError = styled.p`
  color: #f30;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  bottom: -19px;
  border: 1px solid ${({ valid }) => (valid ? '#E7E7E7' : '#F30')};
`
