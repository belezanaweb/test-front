import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { productData } from '../../actions'

class PaymentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      data: {}
    }
  }

  render() {
    const { data } = this.props

    let subTotal = Number(data.subTotal).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    let shippingTotal = Number(data.shippingTotal).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    let discount = Number(data.discount).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    let total = Number(data.total).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })

    return (
      <div>
        <List
          style={{
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#CCC',
            marginTop: 15,
            marginBottom: 15
          }}
        >
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  style={{
                    color: '#212122',
                    fontSize: 14,
                    fontFamily: 'Helvetica Neue'
                  }}
                >
                  PRODUTOS
                </Typography>
              }
            />
            <ListItemText
              primary={
                <Typography
                  style={{
                    color: '#212122',
                    fontSize: 14,
                    fontFamily: 'Helvetica Neue',
                    float: 'right'
                  }}
                >
                  R$ {subTotal}
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  style={{
                    color: '#212122',
                    fontSize: 14,
                    fontFamily: 'Helvetica Neue'
                  }}
                >
                  FRETE
                </Typography>
              }
            />
            <ListItemText
              primary={
                <Typography
                  style={{
                    color: '#212122',
                    fontSize: 14,
                    fontFamily: 'Helvetica Neue',
                    float: 'right'
                  }}
                >
                  R$ {shippingTotal}
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  style={{
                    color: '#FF7800',
                    fontSize: 14,
                    fontFamily: 'Helvetica Neue'
                  }}
                >
                  DESCONTO
                </Typography>
              }
            />
            <ListItemText
              primary={
                <Typography
                  style={{
                    color: '#212122',
                    fontSize: 14,
                    fontFamily: 'Helvetica Neue',
                    float: 'right'
                  }}
                >
                  R$ {discount}
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  style={{
                    color: '#212122',
                    fontSize: 14,
                    fontFamily: 'Helvetica Neue'
                  }}
                >
                  TOTAL
                </Typography>
              }
            />
            <ListItemText
              primary={
                <Typography
                  style={{
                    color: '#212122',
                    fontSize: 14,
                    fontFamily: 'Helvetica Neue',
                    float: 'right'
                  }}
                >
                  R$ {total}
                </Typography>
              }
            />
          </ListItem>
        </List>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ productData }, dispatch)

const mapStateToProps = store => ({
  data: store.product.data
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentComponent)
