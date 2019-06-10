import styled from 'styled-components'
import metrics from '../../../../configs/metrics'
import colors from '../../../../configs/colors'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 0 0px 0;
  justify-content: space-between;
`

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 5px 0 15px;
  width: 100%;
  &.validity {
    width: 50%;
  }
  &.cvv {
    width: 44%;
  }
  & input {
    margin: 5px 0;
    height: 45px;
    border-radius: 3px;
    border: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    font-size: ${metrics.fonts.size.large};
    line-height: 19px;
    color: #e0e7ee;
    width: 100%;
    padding: 12px 13px 12px;
    outline: none;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #e0e7ee;
      opacity: 1; /* Firefox */
    }
    :focus {
      border-color: #a43287;
      color: #000;
    }
    &.error {
      border-color: #f30;
    }

    &[data-type='number'] {
      letter-spacing: 1.37px;
    }
  }
  & .error {
    font-size: ${metrics.fonts.size.xsmall};
    line-height: 14px;
    color: ${colors.error};
  }
`

export const Label = styled.label`
  font-size: ${metrics.fonts.size.xsmall};
  color: #ccc;
  font-weight: bold;
  line-height: 14px;
  width: 100%;
  padding: 0 2px;
`

export const Input = styled.input``
