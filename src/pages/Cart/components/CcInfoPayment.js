import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: '12px',
    '& p':{
      color: theme.palette.secondary.dark,
    },
    '& p:nth-child(2)':{
      textTransform: 'uppercase'
    }
  }
}));

const formatCredicCard = (value) =>{
 const originaNumber = value.split(' ');
 const code1 = originaNumber[0].replace(/[0-9]/g, '*');
 const code2 = originaNumber[1].replace(/[0-9]/g, '*');
 const code3 = originaNumber[2].replace(/[0-9]/g, '*');
 return `${code1}.${code2}.${code3}.${originaNumber[3]}`
}

export default function Products() {
  const classes = useStyles();
  const history = useHistory();

  useEffect(()=>{
    if(history.location.state === undefined) history.push('/')
  },[history])

  return (
    <Paper  elevation={3}>
      <div className={classes.root}>
      {history.location.state !== undefined && (<>
          <Typography variant="body2">{formatCredicCard(history.location.state.ccNumber)}</Typography>
          <Typography variant="body2">{history.location.state.ccName}</Typography>
          <Typography variant="body2">{history.location.state.ccExpirateDate.split(' ').join('/')}</Typography>
          </>
        )}
      </div>
    </Paper>
  );
}