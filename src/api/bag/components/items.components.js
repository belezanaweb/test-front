/**
 * Dependencies
 */
import React from 'react'
import PropTypes from 'prop-types'

/*** Components*/
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  list: {
    border: '1px solid rgba(0, 0, 0, .1)',
    width: 'auto',
    margin: 10
  },
  listSecondary: {
    top: '80%'
  }
}))

const ItemsComponent = ({ items }) => {
  const classes = useStyles()

  return (
    <div>
      <Typography style={{paddingLeft: 10}}>Produtos</Typography>

      <Paper elevation={4}>
        <List component="div">
          {items.map(({ product }) => (
            <ListItem
              component="div"
              alignItems="flex-start"
              key={product.name}
              className={classes.list}
            >
              <ListItemAvatar>
                <img src={product.imageObjects[0].thumbnail} alt={product.name} />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="caption">{product.name}</Typography>
              </ListItemText>
              <ListItemSecondaryAction className={classes.listSecondary}>
                <Typography>{product.priceSpecification.price.toFixed(2)}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  )
}

ItemsComponent.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemsComponent
