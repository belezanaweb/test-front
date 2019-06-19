/**
 * Dependencies
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/*** Components*/
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20
  },
  list: {
    border: '1px solid rgba(0, 0, 0, .1)'
  }
}))

const handleInfos = bag => [
  { label: 'PRODUTOS', value: `R$ ${bag.subTotal.toFixed(2)}`, style: {} },
  { label: 'FRETE', value: `R$ ${bag.shippingTotal.toFixed(2)}`, style: {} },
  { label: 'DESCONTO', value: `- R$ ${bag.discount.toFixed(2)}`, style: { color: '#FF7800' } },
  {
    label: 'TOTAL',
    value: `R$ ${bag.total.toFixed(2)}`,
    style: { fontWeight: 'bold', paddingTop: 10 }
  }
]

const InfoComponent = ({ info }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="div" className={classes.list}>
        {handleInfos(info).map((item, key) => (
          <ListItem component="div" style={{ padding: '0 0 0 10px' }} key={key}>
            <ListItemText primary={item.label} style={item.style} />
            <ListItemSecondaryAction style={item.style}>{item.value}</ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

InfoComponent.propTypes = {
  info: PropTypes.object.isRequired
}

export default InfoComponent
