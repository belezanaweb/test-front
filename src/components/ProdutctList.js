import React, { Component } from 'react';
class ProductList extends Component {

  render() {
    const styles = {
      container: {
        borderWidth: '1px',
        width: '95%',
        margin: '10px auto',
        minHeight: '50px',
        borderColor: '#c0c0c0',
        borderStyle: 'solid',
        WebkitBoxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
        MozBoxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
      },
      itemContainer: {
        borderWidth: '1px',
        width: '90%',
        margin: '15px auto',
        minHeight: '110px',
        borderColor: '#e5e5e5',
        borderStyle: 'solid',
      },
      title: {
        fontSize: '3.5vw',
        fontWeight: 'none',
        padding: '10px',
        height: '50px',
      },
      price: {
        fontSize: '4vw',
        fontWeight: 'bold',
        textAlign: 'right',
        padding: '20px 5px 10px 0',
        height: '20px',
      },
      imageContainer: {
        width: '33%',
        float: 'left',
        height: '100%',
      },
      textContainer: {
        width: '66%',
        float: 'left',
        // height: '100px',
        display:'table-row',
        margin: 'auto',
      }
    };

    let items = this.props.items;

    let produtcts = Array.from(items).map((item, index) => {
      let product = item.product;
      let listItems =
        <div style={styles.itemContainer} key={index} >
          <div style={styles.imageContainer}> <img src={product.imageObjects[0].small} alt='' height='100%' width='100%' /> </div>
          <div style={styles.textContainer}>
            <div style={styles.title}> {product.name} </div>
            <div style={styles.price}> R$ {product.priceSpecification.price} </div>
          </div>
        </div>;
      return listItems;
    });

    return (
        <div style={styles.container} >
          {produtcts}
        </div>
    );

  }

}

export default ProductList;