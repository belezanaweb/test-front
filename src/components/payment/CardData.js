import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class CardData extends Component {
  static propTypes = {
    cardData: PropTypes.object.isRequired
  }
  render() {
    const cardDataStyle = {
      backgroundColor: '#EEE',
      borderLine: '1px',
      paddingTop: '10px'
    }
    return (
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
    )
  }
}

const mapStateToProps = state => ({
  cardData: state.paymentReducer.cardData
})

export default connect(
  mapStateToProps,
  null
)(CardData)
