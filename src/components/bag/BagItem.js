import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class BagItem extends Component {
  static propTypes = {
    bagItems: PropTypes.array.isRequired,
    showPrice: PropTypes.bool.isRequired
  }

  render() {
    const bagItemStyle = {
      borderLine: '5px',
      borderColor: '#EEE',
      paddingLeft: '13px',
      paddingRight: '12px'
    }

    const nameStyle = {
      fontSize: '15px'
    }

    const priceStyle = {
      fontWeight: 'bold',
      textAlign: 'right',
      fontSize: '15px'
    }

    return (
      <div>
        {this.props.bagItems.map(item => (
          <div key={item.product.sku} style={bagItemStyle}>
            <img src={item.product.imageObjects.medium} alt={item.product.sku} />
            <p style={nameStyle}>{item.product.name}</p>
            {this.props.showPrice ? (
              <p style={priceStyle}>R$ {item.product.priceSpecification.price}</p>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bagItems: state.bagReducer.bag
})

export default connect(
  mapStateToProps,
  null
)(BagItem)
