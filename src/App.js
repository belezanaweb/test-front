import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { getItems } from './api/cart'
import { setCartItems } from './actions'

import Navbar from './Navbar'

import 'gridlex/dist/gridlex.min.css'
import './App.css';

class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const Bag = (props) => (
  <DynamicImport load={() => import('./containers/Bag')}>
    {(Component) => Component === null
      ? <p>Carregando...</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Payment = (props) => (
  <DynamicImport load={() => import('./containers/Payment')}>
    {(Component) => Component === null
      ? <p>Carregando...</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Confirmation = (props) => (
  <DynamicImport load={() => import('./containers/Confirmation')}>
    {(Component) => Component === null
      ? <p>Carregando...</p>
      : <Component {...props} />}
  </DynamicImport>
)

class AppHolder extends Component {

  componentDidMount() {
    getItems(this.props.setCartItems)
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Bag} />
          <Route path='/payment' component={Payment} />
          <Route path='/confirmation' component={Confirmation} />
        </div>
      </Router>
    );
  }
}


const mapStateToProps = (state) => ({
  items: state.cart
})

const mapDispatchToProps =  ({
  setCartItems
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHolder)

export default App;
