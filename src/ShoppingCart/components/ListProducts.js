import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Products({listItens}) {
  const classes = useStyles();
  return (
    <Paper  elevation={3}>
        <List className={classes.root}>
            {listItens && listItens.map(item =>(
                <ListItem key={item.product.name}>
                <ListItemAvatar>
                <Avatar>
                <img src={item.product.imageObjects[0].thumbnail} alt={item.product.name}/>
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.product.name} secondary={`R$ ${item.product.priceSpecification.originalPrice}`} />
                </ListItem>
            ))}
        </List>
    </Paper>
  );
}