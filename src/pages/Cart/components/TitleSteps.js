import React from 'react';
import { makeStyles} from '@material-ui/core';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10px 0 5px 10px', 
        fontWeight: 700, 
        fontSize: '0.875rem', 
        color: '#999', 
        textTransform: 'uppercase'
    },
  }));

export default ({title}) =>{
    const classes = useStyles();
    return(
        <>
            <Typography variant="body2" className={classes.root}>{title}</Typography>
        </>
    )
}
