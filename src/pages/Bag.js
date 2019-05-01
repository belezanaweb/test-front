import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Card from '../components/Card';
import CardProduct from '../components/CardProduct';
import CardResume from '../components/CardResume';
import Link from '../components/Link';

import { Content, Resume } from './styles';

class Bag extends Component {
  constructor(props) {
    super(props);
    this.goToPaymentPage = this.goToPaymentPage.bind(this);
  }

  goToPaymentPage() {
    this.props.history.push('/pagamento');
  }

  render() {
    return (
      <div>
        <Header page="bag" />

        <Content>
          <Card title="PRODUTOS">
            <div>
              {this.props.products.map(product => (
                <CardProduct
                  key={product.product.sku}
                  product={product.product}
                />
              ))}
            </div>
          </Card>

          <Resume>
            <CardResume resume={this.props.resume} />

            <Link
              text="Seguir para o pagamento"
              actionLink={this.goToPaymentPage}
            />
          </Resume>
        </Content>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Bag);

function mapStateToProps(state) {
  return {
    resume: state.bag.resume,
    products: state.bag.products
  }
}
