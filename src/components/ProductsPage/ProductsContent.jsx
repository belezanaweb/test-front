import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class ProductsContent extends Component {

  getProductsCard = () => {
    if(this.props.products.items!==undefined) {
      return(
        <Card>
          {this.props.products.items.map(item => (
            <CardContent
              key={item.product.sku}
              style={{
                padding:"10px",
                display:"flex",
                justifyContent:"space-between",
                border:"1px solid #EEE",
                margin:"22px",
              }}
            >
              <img
                style={{
                  alignSelf:"center",
                  width: "65px",
                  height:"65px",
                  marginLeft: '5px',
                }}
                src={item.product.imageObjects[0].large}
                alt={item.product.name}
              />
              <div style={{display: "flex", flexDirection:"column", marginLeft: '10px',}}>
                <p style={{color:"#212122"}}>{item.product.name}</p>
                <p
                  style={{
                    color:"#212122",
                    size: "14px",
                    fontWeight: "bold",
                    alignSelf:"flex-end"
                  }}
                >
                  R$ {item.product.priceSpecification.price}
                </p>
              </div>
            </CardContent>
          ))}
        </Card>
      );
    }
    return null;
  }

  getPriceCard = () => (
    <div style={{ 
      width: "100%",
      border: "1px solid #CCC",
      color: "#212122",
      size: "14px",
      marginTop: "20px",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft:"13px",
        marginRight:"13px"
      }}>
        <p>PRODUTOS</p>
        <p>R$ {(parseFloat(this.props.products.subTotal)).toFixed(2)}</p>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft:"13px",
        marginRight:"13px"
      }}>
        <p>FRETE</p>
        <p>R$ {(parseFloat(this.props.products.shippingTotal)).toFixed(2)}</p>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        color: "#FF7800",
        marginLeft:"13px",
        marginRight:"13px"
      }}>
        <p>DESCONTO</p>
        <p>R$ {(parseFloat(this.props.products.discount)).toFixed(2)}</p>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        fontWeight: "bold",
        marginLeft:"13px",
        marginRight:"13px"
      }}>
        <p>TOTAL</p>
        <p>R$ {(parseFloat(this.props.products.total)).toFixed(2)}</p>
      </div>
    </div>
  )

  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11} sm={11} md={10} lg={10} xl={10}>
          <p style={{
            color:"#999",
            fontSize: "14px",
            lineHeight: "17px",
            fontWeight: "bold",
            marginLeft: "20px",
            marginTop: "20px",
          }}>
            PRODUTOS
          </p>
          {this.getProductsCard()}
          {this.getPriceCard()}
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop:"20px", marginBottom:"20px", width: "100%", backgroundColor: "#FF6C00"}}
          >
            SEGUIR PARA O PAGAMENTO
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default connect(
  ({ productsReducer }) => ({products: productsReducer})
)(ProductsContent);
