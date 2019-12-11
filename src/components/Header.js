import React, { Component } from 'react';

const styles = {
  container: {
    WebkitBoxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    MozBoxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    background: '#fff',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '999',
    width: '100%',
    height: '45px',
  },
  row: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    width: '350px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  itemContainer: {
    color: '#ccc',
    float: 'left',
    textAlign: 'center',
    padding: '15px 15px 0 15px'
  },
  itemContainerActive: {
    color: '#fc6e02',
    float: 'left',
    textAlign: 'center',
    padding: '15px 15px 0 15px'
  },
  title: {
    fontSize: '0.9rem',
    fontWeight: 'none',
    padding: '10px 10px 0 0',
    height: '75px',
    width: '100%',
  }
};

class Header extends Component {
  render() {
    return (
      <header style={styles.container}>
        <div style={styles.row} >
          <div style={this.props.step === 1 ? styles.itemContainerActive : styles.itemContainer} >SACOLA</div>
          <div style={this.props.step === 2 ? styles.itemContainerActive : styles.itemContainer} >PAGAMENTO</div>
          <div style={this.props.step === 3 ? styles.itemContainerActive : styles.itemContainer} >CONFIRMAÇÃO</div>
        </div>
      </header>
    );
  }
}

export default Header;