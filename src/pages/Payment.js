import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Card from '../components/Card';
import CardResume from '../components/CardResume';
import Link from '../components/Link';

import { Content, Resume } from './styles';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.goToSucessPage = this.goToSucessPage.bind(this);
  }

  goToSucessPage() {
    this.props.history.push('/sucesso');
  }

  render() {
    return (
      <div>
        <Header page="payment" />

        <Content>
          <Card title="CARTÃO DE CRÉDITO">
            <div />
          </Card>

          <Resume>
            <CardResume resume={this.props.resume} />

            <Link
              text="Finalizar o pedido"
              actionLink={this.goToSucessPage}
            />
          </Resume>
        </Content>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Payment);

function mapStateToProps(state) {
  return {
    resume: state.bag.resume
  }
}
