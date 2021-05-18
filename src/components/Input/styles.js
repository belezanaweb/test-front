import styled from 'styled-components'
import px2vw from '../../utils/px2vw'
import InputMask from 'react-input-mask'

export const Container = styled.div`
  flex-direction: column;
  margin-bottom: ${px2vw(20)};
  width: ${(props) => (props.size == 'medium' ? '48%' : '100%')};
`

export const Input = styled(InputMask)`
  border: 1px solid ${(props) => (props.error ? '#F30' : '#E7E7E7')};
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: ${px2vw(24)};
  color: #e0e7ee;

  &::placeholder {
    color: #e0e7ee;
  }

  &:focus::placeholder {
    color: #212121;
    border-color: ${(props) => (props.error ? '#F30' : '#A43287')} !important;
  }

  &:focus {
    color: #212121;
    outline-color: ${(props) => (props.error ? '#F30' : '#A43287')} !important;
  }

  @media (min-width: 768px) {
    padding: ${px2vw(20)};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: ${px2vw(18)};
  }

  @media (min-width: 1440px) {
    padding: 20px;
  }
`

export const Label = styled.p`
  color: #ccc;
  margin-bottom: ${px2vw(10)};
`

export const Error = styled.p`
  color: #f30;

  font-size: ${px2vw(24)};

  @media (min-width: 768px) {
    font-size: ${px2vw(20)};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: ${px2vw(16)};
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`
