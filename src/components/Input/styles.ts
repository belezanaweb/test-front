import styled from 'styled-components'
import { colors } from '../../utils/style-config'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-weight: 700;
    line-height: 14px;
    color: ${colors.inputLabelColor};
    margin-bottom: 2px;
  }
`
