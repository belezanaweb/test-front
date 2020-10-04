import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
    loading: {
        color: '#ffffff',
    },
}));

export default function Loading() {
    const classes = useStyles();

    return (
        <Container>
            <CircularProgress className={classes.loading} />
        </Container>
    );
};