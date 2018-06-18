import React, { Component } from 'react';

import { connect } from 'react-redux';

/** -----------------------------------------------
 * This class provide the row of product list
 * 
 */
class ProductResume extends Component {

    constructor(props) {
        super(props);

        console.log('   ...product', this.props)
    }


    render() {

        return (
            <div className="product-resume">
                <div className="product-picture">
                    {<img alt="" src={this.props.product.imageObjects[0].thumbnail} style={{ width: 300, height: 300 }} />}
                </div>
                <div className="product-text">
                    {this.props.product.name}
                </div>
                <div className="product-price">
                    {this.props.product.priceSpecification.price}
                </div>
            </div>

        )
    }

}


//use conector redux to decorate component with variables and methods
export default connect(null, {

})(ProductResume);