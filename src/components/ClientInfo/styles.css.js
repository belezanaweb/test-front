import styled from 'styled-components'

import colors from '../../utils/colors'

export const Container = styled.div`
  border-radius: 3px;
  background-color: ${colors.white};
  box-shadow: 1px 1px 5px 0 ${colors.shadow};
  padding: 10px;
  text-transform: uppercase;
`

export const Text = styled.div`
  font-size: 14px;
`
