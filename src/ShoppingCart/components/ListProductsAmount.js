import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2.5), //20px
    border: '1px solid #CCC',
    padding: `${theme.spacing(1.875)}px ${theme.spacing(1.625)}px ${theme.spacing(1.625)}px ${theme.spacing(1.75)}px`,
    flexDirection: 'column',
    alignItems: 'initial',
    '& p:last-child':{
      fontWeight: 700,
    }
  },
  items:{
      display: 'flex',
      flex: '1',
      justifyContent: 'space-between',
      textTransform: 'uppercase',
      paddingBottom: theme.spacing(1),
      fontSize: '0.875rem', //14px
      lineHeight: '1.063rem', // 17px
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
    <div className={classes.root}>
      <Typography className={classes.items} variant="body2">produtos <span>R$ {products}</span></Typography>
      <Typography className={classes.items} variant="body2">frete <span>R$ {freight}</span></Typography>
      <Typography className={[classes.items, classes.discount].join(' ')} variant="body2">desconto <span>R$ {discount}</span></Typography>
      <Typography className={classes.items} variant="body2">total <span>R$ {total}</span></Typography>
    </div>
  );
}