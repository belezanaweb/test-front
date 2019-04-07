/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const CardBody = styled('div')`
  box-sizing: border-box;
  height: 90px;
  width: 316px;
  border-radius: 3px;
  border: 1px solid #EEE;
  margin: 15px;
`
const Card = (props) => {
  const { items } = props
  const price = items.priceSpecification && items.priceSpecification ? items.priceSpecification.price : 0
  return (
    <CardBody>
      <div>
        <img src={items.product.imageObjects[0].thumbnail} alt={items.product.name}/>
      </div>
      <div>
        <p>
          {items.product.name}
        </p>
        <p>
          R$ {price}
        </p>
      </div>
    </CardBody>
  )
}

Card.prototype = {
  items: PropTypes.object
}

export default Card