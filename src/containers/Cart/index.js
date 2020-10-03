import React, { useState, useEffect } from "react";
import MenuTabs from "../../components/MenuTabs"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from "axios";

const baseUrl = "http://www.mocky.io/v2/5b15c4923100004a006f3c07"

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  }
}));

const Cart = (props) => {
    const classes = useStyles();
    const [products, setProducts] = useState("");

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
          setProducts(response.data.items);
        });
      }, []);

    
    console.log(products)

    return (
        <div>
            <MenuTabs />
            <Typography
                color="secondary"
                variant="h4"
            >
                Produtos
            </Typography>
            <div className={classes.root}>
                {products && products.map(products =>(
                <Paper elevation={3}>
                    {products.product.name}
                    {products.product.priceSpecification.price}
                    {products.product.imageObjects.map(image => (
                    <img src={image.medium}/>
                    ))}
                </Paper>
                ))}
            </div>
        </div>
    )
}

export default Cart;