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

const BodyImg = styled('div')`
  display: inline-block;
  float: left;
`

const BodyDescription = styled('div')`
  display: inline-block;
  float: right;
  p {
    height: 32px;
    width: 244px;
    color: #212122;
    font-family: "Helvetica Neue";
    font-size: 13px;
    letter-spacing: NaNpx;
    line-height: 16px;
  }
`

const Card = (props) => {
  const { items } = props
  const price = items.priceSpecification && items.priceSpecification ? items.priceSpecification.price : 0
  return (
    <CardBody>
      <BodyImg>
        <img src={items.product.imageObjects[0].thumbnail} alt={items.product.name}/>
      </BodyImg>
      <BodyDescription>
        <p>
          {items.product.name}
        </p>
        <p>
          R$ {price}
        </p>
      </BodyDescription>
    </CardBody>
  )
}

Card.prototype = {
  items: PropTypes.object
}

export default Card