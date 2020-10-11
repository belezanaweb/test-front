import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: '12px',
    '& li:last-child':{
      marginBottom: 0,
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%'
    },
  },
  listItem:{
    padding: '12px 14px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'flex-end',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.grey[200]}`,
    marginBottom: theme.spacing(1.875),
    '& > img':{
      paddingRight: theme.spacing(1.25) // 10px
    },
    '& .MuiListItemText-primary':{
      lineHeight: '1',
      fontSize: ' 0.8125rem'
    },
    '& .MuiListItemText-secondary':{
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: theme.spacing(1.875), // 15px
      fontWeight: 700,
      color: theme.palette.secondary.main,
      fontSize: '0.875rem', //14px
    }
  },
  listItemText:{
    margin: '0px',
  }
}));

export default function Products({listItens}) {
  const classes = useStyles();
  return (
    <Paper  elevation={3}>
      <List className={classes.root}>
        {listItens && listItens.map(item =>(
          <ListItem key={item.product.name} className={classes.listItem} disableGutters={true}>
          <img src={item.product.imageObjects[0].thumbnail} alt={item.product.name}/>
          <ListItemText primary={item.product.name} secondary={`R$ ${item.product.priceSpecification.originalPrice}`} className={classes.listItemText} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}