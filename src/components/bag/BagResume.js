import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getBagItems } from '../../actions/bagActions'

export class BagResume extends Component {
  componentWillMount() {
    this.props.getBagItems()
  }

  static propTypes = {
    bagResume: PropTypes.object.isRequired,
    getBagItems: PropTypes.func.isRequired
  }

  render() {
    const bagResumeStyle = {
      backgroundColor: '#EEE',
      borderLine: '1px',
      paddingTop: '10px'
    }

    const allFirstTdStyle = {
      paddingLeft: '17px'
    }

    const discountsStyle = {
      color: 'orange',
      paddingBottom: '15px'
    }
    const totalStyle = {
      fontWeight: 'bold',
      paddingBottom: '12px'
    }

    const allLastTdStyle = {
      textAlign: 'right',
      paddingRight: '12px'
    }
    return (
      <div className="card" style={bagResumeStyle}>
        <table>
          <tbody>
            <tr>
              <td style={allFirstTdStyle}>PRODUTOS</td>
              <td style={allLastTdStyle}>R$ {this.props.bagResume.subtotal}</td>
            </tr>
            <tr>
              <td style={allFirstTdStyle}>FRETE</td>
              <td style={allLastTdStyle}>R$ {this.props.bagResume.shippingTotal}</td>
            </tr>
            <tr>
              <td style={{ ...allFirstTdStyle, ...discountsStyle }}>DESCONTOS</td>
              <td style={{ ...discountsStyle, ...allLastTdStyle }}>
                R$ {this.props.bagResume.discount}
              </td>
            </tr>
            <tr>
              <td style={{ ...allFirstTdStyle, ...totalStyle }}>TOTAL</td>
              <td style={{ ...totalStyle, ...allLastTdStyle }}>R$ {this.props.bagResume.total}</td>
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
  { getBagItems }
)(BagResume)
