import styled from 'styled-components'

import colors from '../../utils/colors'

export const Item = styled.div`
  margin-bottom: 15px;
`

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 ${colors.shadow};
  padding: 12px;

  ${Item}:last-child {
    margin-bottom: 0;
  }
`
