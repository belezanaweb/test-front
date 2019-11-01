import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles(theme=>({
    root: {
        padding: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    title:{
        margin: theme.spacing(1),
        fontWeight: 'bold',
        color: '#999'
    }
}));

function UIPaper( props ){
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Typography className={classes.title}>
                    { props.title || 'Untitle' }
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Paper className={clsx(classes.root, props.classes)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {props.children}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default UIPaper;