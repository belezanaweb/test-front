/**
 * Dependencies
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

/*** Resources*/
import { bagActions } from './bag.actions'

/*** Components*/
import ItemsComponent from './components/items.components'
import InfoComponent from './components/info.component'
import { Button, CircularProgress, Typography } from '@material-ui/core'

class BagContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fetching: true
    }
  }

  componentDidMount() {
    this.props.ALL().then(() => this.setState({ fetching: false }))
  }

  render() {
    const { fetching } = this.state
    const { bag } = this.props

    return (
      <div>
        {fetching ? (
          <div align="center" style={{ position: 'fixed', top: '40%', left: '35%' }}>
            <CircularProgress size={60} />
            <Typography variant="subtitle2">Buscando items</Typography>
          </div>
        ) : (
          <div style={{ padding: 10 }}>
            <ItemsComponent items={bag.items} />

            <InfoComponent info={bag} />

            <Link to="/payment">
              <Button
                href=""
                variant="contained"
                style={{
                  margin: '10px 0',
                  width: '100%',
                  padding: 10,
                  backgroundColor: '#FF7800',
                  color: '#fff',
                  fontWeight: 'bold'
                }}
              >
                seguir para o pagamento
              </Button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators(bagActions, dispatch)

BagContainer.propTypes = {
  bag: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BagContainer)
