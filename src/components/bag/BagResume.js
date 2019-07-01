import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class BagResume extends Component {
  static propTypes = {
    bagResume: PropTypes.object.isRequired
  }

  render() {
    const bagResumeStyle = {
      backgroundColor: '#EEE',
      borderLine: '1px',
      paddingTop: '10px'
    }

    const allFirstTdStyle = {
      paddingLeft: '20px'
    }
    return (
      <div className="card" style={bagResumeStyle}>
        <table>
          <tbody>
            <tr>
              <td style={allFirstTdStyle}>Sub-Total</td>
              <td>R$ {this.props.bagResume.subtotal}</td>
            </tr>
            <tr>
              <td style={allFirstTdStyle}>Shipping Total</td>
              <td>R$ {this.props.bagResume.shippingTotal}</td>
            </tr>
            <tr>
              <td style={allFirstTdStyle}>Discounts</td>
              <td>R$ {this.props.bagResume.discount}</td>
            </tr>
            <tr>
              <td style={allFirstTdStyle}>Total</td>
              <td>R$ {this.props.bagResume.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bagResume: state.bagReducer.bagResume
})

export default connect(
  mapStateToProps,
  null
)(BagResume)
