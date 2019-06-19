/**
 * Dependencies
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

/*** Components*/
import ItemsComponent from '../api/bag/components/items.components'
import InfoComponent from '../api/bag/components/info.component'
import { Typography, Paper, Icon } from '@material-ui/core'
import { CheckCircleOutline } from '@material-ui/icons'

class ConfirmContainer extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.bag).length) {
      this.props.history.push('/')
    }
  }

  render() {
    const { bag, payment } = this.props

    return (
      <div style={{ padding: 10 }}>
        {Object.keys(bag).length && (
          <div>
            <div align="center">
              <Icon>
                <CheckCircleOutline style={{ fontSize: '3.5rem', color: '#FF7800' }} />
              </Icon>
              <Typography style={{ color: '#FF7800' }}>COMPRA EFETUADA COM SUCESSO</Typography>
            </div>

            <Typography style={{ padding: '20px 0 0 10px' }}>Pagamento</Typography>
            <Paper elevation={4} style={{ padding: 10, margin: '0 0 10px 0' }}>
              <Typography variant="subtitle2">{payment.cardNumber}</Typography>
              <Typography variant="subtitle2">{payment.name}</Typography>
              <Typography variant="subtitle2">{payment.validate}</Typography>
            </Paper>

            <ItemsComponent items={bag.items} />

            <InfoComponent info={bag} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => state

ConfirmContainer.propTypes = {
  bag: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withRouter(ConfirmContainer))
