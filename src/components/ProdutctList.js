import React, { Component } from 'react';
import Colors from '../components/Colors'

const styles = {
  container: {
    borderWidth: '1px',
    width: '100%',
    maxWidth: '800px',
    minWidth: '250px',
    margin: '0 auto',
    minHeight: '50px',
    borderColor: '#c0c0c0',
    borderStyle: 'solid',
    WebkitBoxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    MozBoxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    background: '#fff'
  },
  itemContainer: {
    borderWidth: '1px',
    width: '90%',
    margin: '15px auto',
    minHeight: '110px',
    borderColor: Colors.gray,
    borderStyle: 'solid',
  },
  title: {
    fontSize: '0.9rem',
    fontWeight: 'none',
    padding: '10px 10px 0 0',
    height: '75px',
    width: '100%',
    display: 'table-cell',
  },
  price: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textAlign: 'right',
    padding: '2px 15px',
    height: '20px',
  },
  textContainer: {
    width: '70%',
    float: 'right',
    height: '100%',
    margin: 'auto',
  },
  imageContainer: {
    width: '30%',
    float: 'left',
    height: '100%',
  },
  img: {
    width: '100%',
    maxWidth: '100px',
    margin: '0 auto',
  },
  head: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    padding: '5px ',
    color: '#9c9c9c',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  }
};

class ProductList extends Component {
  render() {

    let items = this.props.items;

    let produtcts = Array.from(items).map((item, index) => {
      let product = item.product;
      let listItems =
        <div style={styles.itemContainer} key={index} >
          <div style={styles.imageContainer}> <img src={product.imageObjects[0].small} alt='' style={styles.img} /> </div>
          <div style={styles.textContainer}>
            <div style={styles.title}> {product.name} </div>
            <div className={this.props.hidePrice ? 'hidden' : ''} style={styles.price}> R$ {product.priceSpecification.price} </div>
          </div>
        </div>;
      return listItems;
    });

    return (
      <div >
        <div style={styles.head}>PRODUTOS</div>
        <div style={styles.container} >
          {produtcts}
        </div>
      </div>
    );

  }
}

export default ProductList;