import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getItems } from './api/cart'

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


class App extends Component {

  componentDidMount() {
    getItems(result => console.log(result))
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <li><Link to="/">Sacola</Link></li>
            <li><Link to="/payment">Pagamento</Link></li>
            <li><Link to="/confirmation">Confirmação</Link></li>
          </nav>

          <Route exact path='/' component={Bag} />
          <Route path='/payment' component={Payment} />
          <Route path='/confirmation' component={Confirmation} />
        </div>
      </Router>
    );
  }
}

export default App;
