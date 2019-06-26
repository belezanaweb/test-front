import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'
import CheckIcon from '../../icons/Check'

function SuccessMessage ({ as, ...props }) {
  return (
    <SuccessMessage.Container {...props}>
      <CheckIcon aria-hidden="true" />
      <SuccessMessage.Text as={as}>Compra efetuada com sucesso</SuccessMessage.Text>
    </SuccessMessage.Container>
  )
}

SuccessMessage.propTypes = {
  /* prettier-ignore */
  'as': PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

const primaryColor = ({
  theme: {
    colors: { primary }
  }
}) => primary

SuccessMessage.Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: ${({ area }) => area || 'auto'};
  margin: 0 auto;
  text-align: center;
`

SuccessMessage.Text = styled.p`
  color: ${primaryColor};
  display: inline-block;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 14px 0 0;
  text-transform: uppercase;
`

export default SuccessMessage
