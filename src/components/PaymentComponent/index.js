import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { productData } from '../../actions'

//import './index.css'

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
    return (
      <div>
        <List
          style={{
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: '#EEE',
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
                  R$ {data.subTotal}
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
                  R$ {data.shippingTotal}
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
                  R$ {data.discount}
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
                  R$ {data.total}
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
