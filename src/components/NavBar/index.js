import React, { PureComponent } from "react";
import { Container } from './styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { setPage } from '../../redux/pages/actions';
import { connect } from 'react-redux';
import Cart from '../../pages/Cart/';
import Payment from '../../pages/Payment/';
import Confirmation from '../../pages/Confirmation/';

 class NavBar extends PureComponent {

  render(){

    let url = this.props.page;

    return(
      <Container>
        <Router>
          <ul>
            <li><Link className={url === undefined || url === 'cart' ? 'active' : undefined } to="/cart">Sacola</Link></li>
            <li><Link className={url === 'payment' ? 'active' : undefined } to="/payment">Pagamento</Link></li>
            <li><Link className={url === 'confirmation' ? 'active' : undefined } to="/confirmation">Confirmação</Link></li>
          </ul>

          <Route path="/" exact component={Cart} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/confirmation" component={Confirmation} />
        </Router>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  page: state.pageReducer.page
});

export default connect(
  mapStateToProps,
  { setPage }
)(NavBar);
