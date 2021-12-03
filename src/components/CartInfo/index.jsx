import React from 'react'
import PropTypes from 'prop-types'
import { Box, Info } from './styled'
import { DivHelper, Typography, Loading } from 'components'
import utils from 'utils'

const { Heading5 } = Typography

CartInfo.protoTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool
}

CartInfo.defaultProps = {
  data: [],
  loading: false
}

export default function CartInfo({ data, loading }) {
  const { subTotal, shippingTotal, discount, total } = data
  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Info>
            <Heading5 uppercase>Produtos</Heading5>
            <Heading5 uppercase>{utils.format.money(subTotal)}</Heading5>
          </Info>
          <Info>
            <Heading5 uppercase>Frete</Heading5>
            <Heading5 uppercase>{utils.format.money(shippingTotal)}</Heading5>
          </Info>
          <Info>
            <Heading5 color="primary" uppercase>
              Desconto
            </Heading5>
            <Heading5 color="primary" uppercase>
              - {utils.format.money(discount)}
            </Heading5>
          </Info>
          <DivHelper mt={20}>
            <Info>
              <Heading5 uppercase bold>
                Total
              </Heading5>
              <Heading5 uppercase bold>
                {utils.format.money(total)}
              </Heading5>
            </Info>
          </DivHelper>
        </React.Fragment>
      )}
    </Box>
  )
}
