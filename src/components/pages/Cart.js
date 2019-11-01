import React, { useEffect } from 'react';
import UIButton from '../commons/UIButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import UIHeader from '../commons/UIHeader';
import UIProductList from '../commons/UIProductList';
import UIPurchaseSummary from '../commons/UIPurchaseSummary';
import shoppingCartModel from '../../model/shoppingCartModel';
import http from '../../config/httpService';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme=>({
    root: {
        color: '#CCC',
        padding: theme.spacing(0),
        width: '100%'
    }
}));

function Cart( props ){
    const classes = useStyles();

    useEffect(()=>{
        if(!props.products.length){
            http.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then((xhr)=>{
                props.dispatch(shoppingCartModel.setProducts(xhr.data.items));
                props.dispatch(shoppingCartModel.setSummary({
                    ...xhr.data,
                    items: null
                }));
            });
        }
    }, [props.products.length]);

    shoppingCartModel.setProducts(1);
    
    return (
        <React.Fragment>
            <UIHeader step={0} />
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <UIProductList products={props.products}></UIProductList>
                </Grid>
                <Grid item xs={12}>
                    <UIPurchaseSummary summary={props.summary}></UIPurchaseSummary>
                </Grid>
                <Grid item xs={12}>
                    <UIButton linkTo="/payment">
                        Seguir para o pagamento
                    </UIButton>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


export default connect(store => ({ ...store }))(Cart);