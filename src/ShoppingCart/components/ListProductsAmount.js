import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2.5),
    border: '1px solid #CCC'
  },
  listItem:{
    flexDirection: 'column',
    alignItems: 'initial',
  },
  items:{
      display: 'flex',
      flex: '1',
      justifyContent: 'space-between',
      textTransform: 'uppercase',
      paddingBottom: theme.spacing(1)
  },
  discount:{
      color: theme.palette.primary.main,
      paddingBottom: theme.spacing(2)
  }
}));

export default function Products({amount}) {
  const classes = useStyles();
  const {products, freight, discount, total} = amount;
  return (
    <Box className={classes.root}>
        <List>
            <ListItem className={classes.listItem}>
                <Typography className={classes.items} variant="body2">produtos: <span>R$ {products}</span></Typography>
                <Typography className={classes.items} variant="body2">frete: <span>R$ {freight}</span></Typography>
                <Typography className={[classes.items, classes.discount].join(' ')} variant="body2">desconto: <span>R$ {discount}</span></Typography>
                <Typography className={classes.items} variant="body2">total: <span>R$ {total}</span></Typography>
            </ListItem>
        </List>
    </Box>
  );
}