import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import UIBold from './UIBold';
import Filter from '../../filters/TextFilter';

const useStyles = makeStyles(theme=>({
    root: {
        padding: theme.spacing(2),
        border: '1px solid #EEE',
        borderRadius: 3,
        display: 'flex'
    },
    thumbnail:{

    },
    name: {
    },
    informations: {
        padding: `0 0 0 ${theme.spacing(3)}px`,
        flex: '1 1 auto'
    },
    price:{
        marginTop: theme.spacing(1) 
    }
}));

function UIProductItem( props ){
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, props.className)}>
            <div className={classes.thumbnail}>
                <img alt={props.name} src={props.image} />
            </div>
            <div className={classes.informations}>
                <Typography color="inherit" variant="caption" className={classes.name}>
                    {props.name}
                </Typography>
                
                { !('purchase' in props) && (
                    <Typography className={classes.price} color="inherit" align="right">
                        <UIBold>R$ <Filter type="currency">{props.price}</Filter></UIBold>
                    </Typography>
                )}
            </div>
        </div>
    );
}

export default UIProductItem;