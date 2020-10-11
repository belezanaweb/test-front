import React from 'react';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    '& > p':{
      textTransform: 'uppercase',
      fontWeight: 700,
      color: theme.palette.secondary.light,
      lineHeight: '1.231rem',
      fontSize: ' 0.8125rem', // 13px
      '&.active':{
        color: theme.palette.primary.light
      }
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent:'space-evenly',
    },
  }
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  const active = true;

  return (
    <div className={classes.root}>
        <Typography variant="body1" className={active ? 'active' : ''}>Sacola</Typography>
        <Typography variant="body1">Pagamento</Typography>
        <Typography variant="body1">Confirmação</Typography>
    </div>
  );
}