import styled from 'styled-components'

const ConfirmationInfo = styled.div`
  color: #000;
  font-size: 14px;
  line-height: 17px;
`

const ConfirmationMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff7800;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 12px;
  & img {
    margin-bottom: 11px;
  }
`

export { ConfirmationInfo, ConfirmationMessage }
