import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import UIHeader from '../commons/UIHeader';
import UIPaper from '../commons/UIPaper';
import UIProductList from '../commons/UIProductList';
import TextFilter from '../../filters/TextFilter';
import UIPurchaseSummary from '../commons/UIPurchaseSummary';
import { Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import clsx from 'clsx';

const useStyles = makeStyles(theme=>({
    root: {
        color: '#CCC',
        padding: theme.spacing(0),
        width: '100%'
    },
    success:{
        color: theme.pallete.primary
    },
    userName:{
        textTransform: 'uppercase'
    },
    confirmation:{
        textAlign: 'center',
        padding: theme.spacing(2),
        '& .text':{
            fontSize: 14,
            textTransform: 'uppercase',
            fontWeight: 'bold'
        }
    }
}));

function Confirmation( props ){
    const classes = useStyles();
    const history = useHistory();


    useEffect(()=>{
        if(!props.user.name){
            history.push('/payment');
        }
    });

    return (
        <React.Fragment>
            {
                props.user.name && <React.Fragment>
                    <UIHeader step={2} />
                    <Grid container className={classes.root}>
                        <Grid item xs={12}>
                            <div className={clsx(classes.success, classes.confirmation)}>
                                <CheckCircleOutlineIcon fontSize="large" color="inherit" />
                                <Typography className="text" color="inherit">Compra efetuada com sucesso</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <UIPaper title="PAGAMENTO">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography color="inherit"><TextFilter type="creditcard">{props.user.creditcard}</TextFilter></Typography>
                                        <Typography color="inherit" className={classes.userName}>{props.user.name}</Typography>
                                        <Typography color="inherit">{props.user.validate}</Typography>
                                    </Grid>
                                </Grid>
                            </UIPaper>
                        </Grid>
                        <Grid item xs={12}>
                            <UIProductList  products={props.products} purchase></UIProductList>
                        </Grid>
                        <Grid item xs={12}>
                            <UIPurchaseSummary summary={props.summary}></UIPurchaseSummary>
                        </Grid>
                    </Grid>
                </React.Fragment>
            }
        </React.Fragment>
    )
}


export default connect(store => ({ ...store }))(Confirmation);