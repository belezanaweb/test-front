import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class CardData extends Component {
  static propTypes = {
    cardData: PropTypes.object.isRequired
  }
  render() {
    const cardDataStyle = {
      backgroundColor: 'white',
      borderLine: '1px',
      paddingTop: '10px'
    }
    const cardDataTitleStyle = {
      marginLeft: '13px',
      paddingTop: '10px',
      color: 'gray'
    }
    if (
      !(
        Object.entries(this.props.cardData).length === 0 &&
        this.props.cardData.constructor === Object
      )
    ) {
      return (
        <div>
          <p style={cardDataTitleStyle}>PAGAMENTOS</p>
          <div className="card" style={cardDataStyle}>
            <table>
              <tbody>
                <tr>
                  <td>{this.props.cardData.creditCard}</td>
                </tr>
                <tr>
                  <td>{this.props.cardData.name}</td>
                </tr>
                <tr>
                  <td>{this.props.cardData.validate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    } else {
      return <div />
    }
  }
}

const mapStateToProps = state => ({
  cardData: state.paymentReducer.cardData
})

export default connect(
  mapStateToProps,
  null
)(CardData)
