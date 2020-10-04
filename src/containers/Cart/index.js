import React, { useState, useEffect } from "react";
import MenuTabs from "../../components/MenuTabs"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import styled from "styled-components";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";


const baseUrl = "http://www.mocky.io/v2/5b15c4923100004a006f3c07";

const ContainerProducts = styled(Container)`
  display: flex;
  position: relative;
  margin: 2%;
  width: 96%;
  border: 0.7px solid black;
  padding: 3%;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    height: "100%",
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(100),
    },
    submit: {
      justifyContent: 'center',
      display: 'flex',
      
    },
    total: {
      display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }
}));

const Cart = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const [products, setProducts] = useState("");

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
          setProducts(response.data);
        });
      }, []);

    const goToPayment = () => {
      history.push("/payment")
    }

    const total = products.subTotal + products.shippingTotal - products.discount;

    return (
        <div>
            <MenuTabs />
              <Typography
                  color="secondary"
                  variant="h4"
                  display= "inline"
              >
                  Produtos
              </Typography>
              <div className={classes.root}>
                <Paper elevation={3}>
                  {products.items && products.items.map(products =>(
                    <ContainerProducts>
                      <Grid container spacing={2}>
                        <Grid item>
                        {products.product.imageObjects.map(image => (
                          <img src={image.medium}/>
                        ))}
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <h5>{products.product.name}</h5>
                            </Grid>
                            <Grid 
                              item
                              justify="flex-end"
                            >
                              <p>{products.product.priceSpecification.price.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})}</p>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </ContainerProducts>
                    ))}
                    </Paper>
                    <Paper variant="outlined" >
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>PRODUTOS</Paper>
                        </Grid>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>{products.subTotal && products.subTotal.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})}</Paper>
                        </Grid>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>FRETE</Paper>
                        </Grid>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>{products.shippingTotal && products.shippingTotal.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})}</Paper>
                        </Grid>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>DESCONTO</Paper>
                        </Grid>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>-{products.discount && products.discount.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})}</Paper>
                        </Grid>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>TOTAL</Paper>
                        </Grid>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>{total.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})}</Paper>
                        </Grid>
                      </Grid>
                    </Paper>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      size="large"
                      style={{ background:"#FF7800" }}
                      className={classes.submit}
                      onClick={goToPayment}
                    >
                      SEGUIR PARA O PAGAMENTO
                    </Button>
                </div>
        </div>
    )
}

export default Cart;