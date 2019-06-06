import React, { Component } from 'react'

import { connect } from 'react-redux'

/** -----------------------------------------------
 * This class provide the row of product list
 *
 */
class ProductResume extends Component {
  constructor(props) {
    super(props)
  }

  formatCurrency(num) {
    if (num) {
      var num = num.toFixed(2).split('.')
      num[0] = 'R$ ' + num[0].split(/(?=(?:...)*$)/).join('.')
      return num[0] + ',' + num[1]
    }
  }

  render() {
    return (
      <div className="product-resume">
        <div className="product-thumbnail">
          {<img alt="" src={this.props.product.imageObjects[0].thumbnail} />}
        </div>
        <div className="product-text">{this.props.product.name}</div>
        <div className="product-price">
          {this.formatCurrency(this.props.product.priceSpecification.price)}
        </div>
      </div>
    )
  }
}

//use conector redux to decorate component with variables and methods
export default connect(
  null,
  {}
)(ProductResume)
