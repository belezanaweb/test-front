import React, { useState, useEffect } from "react";
import MenuTabs from "../../components/MenuTabs";
import ContainerTotalPrice from "../../components/ContainerTotalPrice";
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
    }
  },
  submit: {
    justifyContent: 'center',
    display: 'flex',
  },
}
));

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

  return (
    <div>
      <MenuTabs />
      <div className={classes.root}>
        <Typography
          color="secondary"
          variant="h4"
          display="inline"
        >
          PRODUTOS
                </Typography>
        <Paper elevation={3}>
          {products.items && products.items.map(products => (
            <ContainerProducts>
              <Grid container spacing={2}>
                <Grid item>
                  {products.product.imageObjects.map(image => (
                    <img src={image.medium} alt="object-product" />
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
                      <p>{products.product.priceSpecification.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ContainerProducts>
          ))}
        </Paper>
        <ContainerTotalPrice />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          size="large"
          style={{ background: "#FF7800" }}
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