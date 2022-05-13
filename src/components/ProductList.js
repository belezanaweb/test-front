import React from 'react'
import { Card, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    padding: '0px',
    marginTop: '10px'
  },
  paper: {
    borderRadius: '3px',
    color: '#fff',
    padding: '12px'
  },
  card: {
    boxShadow: 'none',
    borderRadius: '3px',
    border: 'solid 1px #EEE',
    marginBottom: '15px',
    padding: '10px'
  },
  text: {
    marginTop: '12px',
    color: '#212122',
    fontSize: '13px',
    lineHeight: '16px'
  },
  textPrice: {
    fontSize: '14px',
    lineHeight: '17px',
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: '15px'
  }
})

function ProductsList({ data, price }) {
  const classes = useStyles()
  const items = data.items

  return (
    <>
      <Container className={classes.root}>
        <Typography style={{ color: '#999', fontWeight: 'bold' }}>PRODUTOS</Typography>
        <Paper elevation={3} className={classes.paper}>
          {items?.map((item, idx) => (
            <Card className={classes.card} key={idx}>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <img
                    src={item.product.imageObjects[0].small}
                    alt={item.product.imageObjects[0].small}
                  />
                </Grid>
                <Grid item xs={7}>
                  <Typography className={classes.text}>{item.product.name}</Typography>
                  {price && (
                    <Typography className={classes.textPrice}>
                      {' '}
                      {item.product.priceSpecification.originalPrice.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Card>
          ))}
        </Paper>
      </Container>
    </>
  )
}

export default ProductsList
