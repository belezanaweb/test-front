import React, {useState, useEffect} from 'react';
import {makeStyles, Grid, CircularProgress} from '@material-ui/core';
import UIPaper from '../commons/UIPaper';
import UIProductItem from '../commons/UIProductItem';

const useStyles = makeStyles(theme=>({
    root: {
        padding: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    productList: {
        minHeight: '30vh',
        position: 'relative'
    },
    productItem: {
        marginBottom: theme.spacing(1),
        '&:last-child':{
            marginBottom: 0
        }
    },
    preload:{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    }
}));

function UIProductList( props ){
    const classes = useStyles();
    const [products, setProducts] = useState( [] );

    useEffect(()=>{
        if(props.products.length){
            let products = [].concat(props.products);
            setProducts(products);
        }
    }, [props.products]);

    return (
        <UIPaper classes={classes.productList} title="PRODUTOS">
            {
                !products.length && <Grid item xs={12} className={classes.preload}><CircularProgress /></Grid>
            }
            {
                !!products.length && <Grid container spacing={3}>
                    <Grid item xs={12}>
                    { 
                        products.map((item, index)=>(
                            <UIProductItem 
                                key={index}
                                {...props}
                                className={classes.productItem}
                                image={item.product.imageObjects[0].thumbnail}
                                name={item.product.name}
                                price={item.product.priceSpecification.price}
                            />
                        )) 
                    } 
                    </Grid>
                </Grid>
            }
        </UIPaper>
    );
}

export default UIProductList;