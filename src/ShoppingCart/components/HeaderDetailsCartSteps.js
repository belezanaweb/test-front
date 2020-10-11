import React from 'react';
import {Typography, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    '& > p':{
      textTransform: 'uppercase',
      fontWeight: 700,
      color: theme.palette.secondary.light,
      '&.active':{
        color: theme.palette.primary.light
      }
    }
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  const active = true;

  return (
    <Box className={classes.root}>
        <Typography variant="body1" className={active ? 'active' : ''}>Sacola</Typography>
        <Typography variant="body1">Pagamento</Typography>
        <Typography variant="body1">Confirmação</Typography>
    </Box>
  );
}