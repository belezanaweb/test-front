import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { productData } from '../../actions'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  bag: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#FF7800',
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: 700
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#CCC',
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: 700
  }
})

class Products extends Component {
  constructor(props) {
    super(props)
    console.log('props', props)

    this.state = {
      items: [],
      data: {}
    }
  }

  render() {
    const { classes, data } = this.props
    console.log('data1', data)

    return (
      <div style={{ background: '#EEE' }}>
        <Grid container>
          <Grid item xs={12}>
            <p
              style={{
                color: '#999',
                fontFamily: 'Helvetica Neue',
                fontSize: 14,
                fontWeight: 700,
                marginLeft: 20,
                marginRight: 20,
                height: 17
              }}
            >
              PRODUTOS
            </p>
            `
            {this.props.data.items && (
              <Paper className={classes.paper}>
                <List>
                  {data.items.map(item => {
                    return (
                      <ListItem
                        key={item.product.name}
                        alignItems="flex-start"
                        style={{
                          borderStyle: 'solid',
                          borderWidth: 2,
                          borderColor: '#EEE',
                          marginBottom: 10
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src={item.product.imageObjects[0].thumbnail} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography
                              style={{
                                color: '#212122',
                                fontSize: 13,
                                fontFamily: 'Helvetica Neue'
                              }}
                            >
                              {item.product.name}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              component="span"
                              style={{
                                color: '#212122',
                                fontSize: 14,
                                fontWeight: 700,
                                fontFamily: 'Helvetica Neue',
                                float: 'right'
                              }}
                            >
                              R${' '}
                              {item.product.priceSpecification.price.toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                              })}
                            </Typography>
                          }
                        />
                      </ListItem>
                    )
                  })}
                </List>
              </Paper>
            )}
          </Grid>
        </Grid>
      </div>
    )
  }
}

Products.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({ productData }, dispatch)

const mapStateToProps = store => ({
  data: store.product.data
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Products))
