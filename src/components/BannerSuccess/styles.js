import styled from 'styled-components'
import { FaRegCheckCircle } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  text-transform: uppercase;
  color: #ff7800;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
`

export const IconSuccess = styled(FaRegCheckCircle)`
  width: 40px;
  height: 40px;
  color: #ff7800;
  margin-bottom: 12px;
  margin-top: 3px;
`
