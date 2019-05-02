import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Card from '../components/Card';
import CardResume from '../components/CardResume';
import Link from '../components/Link';

import { Main, Aside, Container } from './styles';

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

        <Container>
          <Main>
            <Card title="CARTÃO DE CRÉDITO">
              <div />
            </Card>
          </Main>

          <Aside>
            <CardResume resume={this.props.resume} />

            <Link
              text="Finalizar o pedido"
              actionLink={this.goToSucessPage}
            />
          </Aside>
        </Container>
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
